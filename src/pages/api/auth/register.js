import createHandler from 'services';
import User from 'models/user';

const bcrypt = require('bcryptjs');
const handler = createHandler();

handler.post(async (req, res) => {
  const { role, email, firstname, lastname, address, city, country, zipcode, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'Email address already exists' });
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
      password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // register user to mongodb
    await user.save();

    return res.status(200).json({
      id: user.id,
      role: user.role,
      name: `${user.firstname} ${user.lastname}`,
      email: user.email
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

export default handler;
