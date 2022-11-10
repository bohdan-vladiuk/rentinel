import createHandler from "../../../middleware";
import Property from "../../../models/property";

const handler = createHandler();

handler.post(async (req, res) => {
  const newProperty = new Property({
    address1: req.body.address1,
    address2: req.body.address2,
    city: req.body.city,
    country: req.body.country,
    zipcode: req.body.zipcode,
    deposit: req.body.deposit,
    rentAmount: req.body.rentAmount,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });

  newProperty
    .save()
    .then((property) => res.status(200).json(property))
    .catch((err) => res.status(400).json(err));
});

export default handler;
