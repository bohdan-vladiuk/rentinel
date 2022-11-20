import createHandler from "middleware";
import Contract from "models/contract";
import Property from "models/property";
import { UserRole } from "services/config";

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
  const role = req.query?.role;
  let contracts;

  if (role === undefined) {
    // Find All Contracts
    contracts = await Contract.find().sort("-createdAt");
  }
  if (role == UserRole.TENANT) {
    contracts = await Contract.find({ tenantEmail: req.query.email }).sort(
      "-createdAt"
    );
  } else if (role == UserRole.LANDLORD) {
    const properties = await Property.find({ email: req.query.email });
    const propertyIds = properties?.map((p) => p.id);

    contracts = await Contract.find({ propertyId: { $in: propertyIds } }).sort(
      "-createdAt"
    );
  }
  return res.status(200).json(contracts);
});

export default handler;
