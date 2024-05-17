import mongoose from "mongoose";
const fpschema = mongoose.Schema({
  fpName: {
    type: String,
    required: true,
  },
  fpPrice: {
    type: Number,
    required: true,
  },
  fpImage: {
    type: String,
    required: true,
  },
  fpDiscription: {
    type: String,
    required: true,
  },
  shopid: {
    type: String,
    required: false,
  },
});
export const FpModel = await mongoose.model("fps", fpschema);
export default FpModel;
