import mongoose from "mongoose"

const vegetableSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    categories:{
        type:String,
        required:true
    },
    image:{
        type:url,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
export const VegetableModel =mongoose.Model('vegetables',vegetableSchema);
export default VegetableModel