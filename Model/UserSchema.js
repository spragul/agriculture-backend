import mongoose from "mongoose";
import validator from "validator"

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }

    },
    password:{
        type:String,
        required:true
    },
    role:{
      type:String,
      required:false,
      default:"user"
    },
    mobile:{
        type:Number,
        required:true
    },
    land:{
        type:Number,
        required:true
    },
    reportsid:{
        type:Array,
        required:false
    },
    date: {
        type: Date,
        require:false,
        default: Date.now
    },


})
export const UserModel=mongoose.model('users',userSchema)
export default UserModel