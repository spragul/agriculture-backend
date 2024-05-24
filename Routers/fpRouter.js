import express from "express";
import {addfertilizer, deletefertilizer, editfertilizer, getAllfertilizer} from "../Controller/fpcontroll.js"
import { shopOwnerAuthentication, validate } from "../Authentication/auth.js";


const router =express.Router();
router.get('/:id',validate,getAllfertilizer);
router.post("/addfp/:id",shopOwnerAuthentication,addfertilizer);
router.put("/editfp",shopOwnerAuthentication,editfertilizer);
router.delete("/deletefp/:id",shopOwnerAuthentication,deletefertilizer);



export default router