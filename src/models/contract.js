import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "Contract";

const schema = new Schema(
  {
    propertyId: {
      type: Schema.Types.ObjectId,
      ref: "properties01",
      required: true,
    },
    tenantEmail: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, schema, "contract");
