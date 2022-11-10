import { pool } from "../config/db";

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { role, firstname, lastname, email, password } = req.body;

    const result = await pool.query("INSERT INTO users SET ?", {
      role,
      firstname,
      lastname,
      email,
      password,
    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const authenticateUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    // validate
    // if (!(user && bcrypt.compareSync(password, user.hash))) {
    //     throw 'Username or password is incorrect';
    // }
    if (!(users.length && users[0].password === password)) {
      // throw "Email address or password is incorrect";
      return res
        .status(400)
        .json({ message: "Email address or password is incorrect" });
    }

    // create a jwt token that is valid for 7 days
    const user = users[0];
    const token = jwt.sign({ sub: user.id }, "secret", { expiresIn: "7d" });

    // return basic user details and token
    return res.status(200).json({
      id: user.id,
      role: user.role,
      firstname: user.firstname,
      lastname: user.lastname,
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { authenticateUser, registerUser };
