import createHandler from 'services';
import Property from 'models/property';

const handler = createHandler();

handler.post(async (req, res) => {
  const { user, address1, address2, city, country, zipcode, deposit, rentAmount, startDate, endDate } = req.body;

  try {
    // Check property duplication
    // let property = await Property.findOne({ email });
    // if (user) {
    //   return res.status(400).json({ message: 'Email address already exists' });
    // }

    let property = new Property({
      user,
      address1,
      address2,
      city,
      country,
      zipcode,
      deposit,
      rentAmount,
      startDate,
      endDate
    });

    await property.save();
    return res.status(200).json({
      message: 'Property created.'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error'
    });
  }
});

export default handler;
