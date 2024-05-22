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
  image:{
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  startingdate: {
    type: Date,
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
