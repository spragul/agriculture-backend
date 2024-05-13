import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userrouter from './Routers/userRouter.js';
import mongoose from "mongoose";


const url =process.env.MONGO_URL;
dotenv.config();
const app =express();
app.use(cors());
app.use(express.json());

let res =await mongoose.connect(url);
    if(res){
        console.log('DataBase connect')
    }else{
        console.log('DataBase not Connect')
    }


app.use('/user',userrouter);
app.use('/',(req,res)=>{
res.status(200).json({message:"<h1>Agriculture backend Working<h1>"})
})

app.listen(process.env.PORT || '9000',()=>{ console.log(`App listen port :${port}`)})
