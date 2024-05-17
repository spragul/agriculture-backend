import express from "express";
import {addfertilizer, deletefertilizer, editfertilizer, getAllfertilizer} from "../Controller/fpcontroll.js"


const router =express.Router();
router.get('/:id',getAllfertilizer);
router.post("/addfp/:id",addfertilizer);
router.put("/editfp",editfertilizer);
router.delete("/deletefp/:id",deletefertilizer);



export default router