import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from "mongoose";
import userrouter from './Routers/userRouter.js';
import vegetablerouter from "./Routers/vegetableRouter.js"


//configure dotenv
dotenv.config();
const app =express();
app.use(cors());
app.use(express.json());

//mongodb connection
const url =process.env.MONGO_URL;
let res =await mongoose.connect(url);
    if(res){
        console.log('DataBase connect')
    }else{
        console.log('DataBase not Connect')
    }

//router
app.use('/user',userrouter);
app.use("/vegetable",vegetablerouter)

//checking backend
app.use('/',(req,res)=>{
res.status(200).json({message:"<h1>Agriculture backend Working<h1>"})
})
//app listen
app.listen(process.env.PORT || '9000',()=>{ console.log('App listen')})
