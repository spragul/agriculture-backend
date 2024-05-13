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
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
export const VegetableModel =mongoose.model('vegetables',vegetableSchema);
export default VegetableModel