import mongoose from "mongoose"
const soilreportSchema=new mongoose.Schema({
     soiltest:{
        type:String,
        required:true
     },
     submittedby:{
        type:String,
        required:true
     },
     testreportdate:{
       type:Number,
       required:true
     },
     reportdetails:{
       type:Array,
       required:true
     },
     userid:{
      type:String,
      required:true
     }

})

export const SoilModel= mongoose.model("soils",soilreportSchema);
export default SoilModel