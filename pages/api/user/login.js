import createHandler from "../../../middleware";
import User from "../../../models/user";

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const handler = createHandler();

handler.post(async (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) return res.status(400).json({ message: "User not found." });

      bcrypt
        .compare(password, user.password)
        .then((isMatch) => {
          if (!isMatch)
            return res.status(400).json({ message: "Password is incorrect" });

          // create a jwt token that is valid for 7 days
          const payload = {
            id: user.id,
            role: user.role,
            firstname: user.firstname,
            lastname: user.lastname,
          };

          const token = jwt.sign(payload, "secret", {
            expiresIn: "1d",
          });

          // return basic user details and token
          return res.status(200).json({ role: user.role, token });
        })
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.json(err));
});

export default handler;
