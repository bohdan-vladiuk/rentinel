import createHandler from "../../../middleware";
import User from "../../../models/user";

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

  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ message: "User already exists." });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        const newUser = new User({
          role,
          email,
          firstname,
          lastname,
          address,
          city,
          country,
          zipcode,
          password: hash,
        });

        newUser
          .save()
          .then((user) => res.status(200).json(user))
          .catch((err) => res.status(400).json(err));
      });
    });
  });
});

export default handler;
