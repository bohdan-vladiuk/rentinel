import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "Dispute";

const schema = new Schema(
  {
    contractId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    claimerEmail: {
      type: String,
      required: true,
    },
    adjusterEmail: {
      type: String,
    },
    description: {
      type: String,
      default: "",
    },
    amount: {
      type: Number,
      default: 0,
    },
    status: {
      type: Number,
      default: 0,
    },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, schema, "dispute");
