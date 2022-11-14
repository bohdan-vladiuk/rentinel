import createHandler from 'middleware';
import User from 'models/user';

const bcrypt = require('bcryptjs');
const handler = createHandler();

handler.post(async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Verify Your Email & Password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Password' });
    }

    return res.status(200).json({
      id: user.id,
      role: user.role,
      name: `${user.firstname} ${user.lastname}`,
      email: user.email
    });

    // const payload = {
    //   user: {
    //     id: user.id,
    //     role: user.role
    //   }
    // };

    // create a jwt token that is valid for 1 day
    // sign(payload, 'jwtSecret', { expiresIn: '1d' }, (err, accessToken) => {
    //   if (err) throw err;
    //   res.status(200).json({ accessToken, user: payload.user });
    // });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

export default handler;
