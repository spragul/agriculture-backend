import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'


import userrouter from './Routers/userRouter.js';
import { mongoconnect } from './Database/database.js';

dotenv.config();
const port=process.env.PORT;
const app =express();
app.use(cors());
app.use(express.json());


mongoconnect();
app.use('/user',userrouter);
app.use('/',(req,res)=>{
res.status(200).json({message:"<h1>Agriculture backend Working<h1>"})
})

app.listen(port,()=>{ console.log(`App listen port :${port}`)})
