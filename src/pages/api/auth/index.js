import createHandler from "middleware";
import { verify } from "services/jwt";

const handler = createHandler();

handler.get(async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: "Token is not valid" });
      }
      res.json({ user: decoded });
    });
  } catch (err) {
    console.error("something wrong with auth middleware");
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default handler;
