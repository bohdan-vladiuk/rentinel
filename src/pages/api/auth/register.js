import createHandler from "middleware";
import { sign } from "services/jwt";
import User from "models/user";

const bcrypt = require("bcryptjs");
const handler = createHandler();

handler.post(async (req, res) => {
  const {
    role,
    email,
    firstname,
    lastname,
    address,
    city,
    country,
    zipcode,
    password,
  } = req.body;

  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "Email address already exists" });
  }

  user = new User({
    role,
    email,
    firstname,
    lastname,
    address,
    city,
    country,
    zipcode,
    password,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);

  // register user to mongodb
  await user.save();

  const payload = {
    id: user.id,
    role: user.role,
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
  };

  // create a jwt token that is valid for 1 day
  sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
    (err, accessToken) => {
      if (err) throw err;
      res.status(200).json({ accessToken, user: payload });
    }
  );
});

export default handler;
