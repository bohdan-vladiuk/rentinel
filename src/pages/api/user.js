import createHandler from "middleware";
import User from "models/user";

const handler = createHandler();

handler.get(async (req, res) => {
  const users = await User.find().sort("role");
  return res.status(200).json(users);
});

export default handler;
