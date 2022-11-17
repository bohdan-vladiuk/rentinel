import createHandler from "middleware";
import Contract from "models/contract";

const handler = createHandler();

handler.post(async (req, res) => {
  const newContract = new Contract({
    propertyId: req.body.propertyId,
    tenantEmail: req.body.tenantEmail,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });

  newContract
    .save()
    .then((contract) => {
      res.status(200).json(contract);
    })
    .catch((err) => res.status(400).json(err));
});

handler.get(async (req, res) => {
  const contracts = await Contract.find().sort("-createdAt");
  res.status(200).json(contracts);
});

export default handler;
