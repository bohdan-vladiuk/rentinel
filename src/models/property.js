import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "Property";

const schema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    deposit: {
      type: Number,
      required: true,
    },
    rentAmount: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      require: true,
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
  mongoose.model(MODEL_NAME, schema, "property");
