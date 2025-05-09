import mongoose from "mongoose";

const callSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, //createdAt, updatedAt
  }
);

//now create call model

const Call = mongoose.model("Call", callSchema); //put singular and capital (aka Call turns into calls)

export default Call;
