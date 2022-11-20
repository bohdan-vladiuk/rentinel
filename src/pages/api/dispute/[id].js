import createHandler from "middleware";
import Dispute from "models/dispute";
import { DisputeStatus } from "services/config";

const handler = createHandler();

handler.patch(async (req, res) => {
  const status = req.body.isApproved
    ? DisputeStatus.APPROVED
    : DisputeStatus.DENIED;
  const adjusterEmail = req.body.adjusterEmail;

  const dispute = await Dispute.findByIdAndUpdate(
    req.query.id,
    { status, adjusterEmail },
    { new: true }
  );
  res.status(200).json(dispute);
});

export default handler;
