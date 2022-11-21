import { IncomingForm } from "formidable";
import Dispute from "models/dispute";

var mv = require("mv");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);

      var oldPath = files.file.filepath;
      var newFilename = `${files.file.newFilename}.${files.file.originalFilename
        .split(".")
        .pop()}`;
      var newPath = `./public/uploads/${newFilename}`;
      mv(oldPath, newPath, function (err) {});

      const newDispute = new Dispute({
        contractId: fields.contractId,
        claimerEmail: fields.claimerEmail,
        description: fields.description,
        amount: fields.amount,
        photo: newFilename,
      });

      newDispute
        .save()
        .then((dispute) => {
          res.status(200).json(dispute);
        })
        .catch((err) => res.status(400).json(err));
    });
  });
};
