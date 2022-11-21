import createHandler from "middleware";
import Dispute from "models/dispute";

const handler = createHandler();

handler.post(async (req, res) => {
  // const newDispute = new Dispute({
  //   contractId: req.body.contractId,
  //   claimerEmail: req.body.claimerEmail,
  //   description: req.body.description,
  //   amount: req.body.amount,
  // });

  // newDispute
  //   .save()
  //   .then((dispute) => {
  //     res.status(200).json(dispute);
  //   })
  //   .catch((err) => res.status(400).json(err));
  res.status(200).json(req.body);
});

handler.get(async (req, res) => {
  const disputes = await Dispute.find().sort("-createdAt");
  res.status(200).json(disputes);
});

export default handler;
