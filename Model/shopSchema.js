import mongoose from "mongoose"
const shopSchema=new mongoose.Schema({
     shopname:{
        type:String,
        required:true
     },
     Address:{
        type:String,
        required:true
     },
     mobile:{
       type:Number,
       required:true
     },
     product:[
       {
        fpName:{
            type:String,
            required:true
        },
        fpPrice:{
            type:Number,
            required:true
        },
        fpImage:{
            type:String,
            required:true
        },
        fpDiscription:{
            type:String,
            required:true
        }
       }
     ],
     date: {
        type: Date,
        default: Date.now
    }

})

export const ShopModel= mongoose.model("shops",shopSchema);
export default ShopModel