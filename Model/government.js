import mongoose from "mongoose";
const governmentSchema = new mongoose.Schema({
  schemename: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  startingdate: {
    type: Number,
    required: true,
  },
  userreview:[
       {
        userid:{
          type:String,
          required:true
        },
        username:{
          type:String,
          required:true
        },details:{
          type:String,
          required:true
        }
       }
],
  date: {
    type: Date,
    default: Date.now,
  },
});
export const GovernmentModel = mongoose.model("governmens", governmentSchema);
export default GovernmentModel;
