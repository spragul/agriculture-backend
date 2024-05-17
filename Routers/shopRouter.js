import express from "express";
import { addShop,  deleteShop, editshop, getAllShop, getOneShop } from "../Controller/shopControll.js";

const router =express.Router();
router.get('/',getAllShop);
router.get('/:id',getOneShop);
router.post("/adddata",addShop);
router.put("/editdata",editshop);
router.delete("/deletedata/:id",deleteShop);


export default router