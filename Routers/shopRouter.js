import express from "express";
import { addShop, addproductlist, deleteShop, deleteproductlist, editshop, getAllShop, getOneShop } from "../Controller/shopControll.js";

const router =express.Router();
router.get('/',getAllShop);
router.get('/:id',getOneShop);
router.post("/adddata",addShop);
router.put("/editdata",editshop);
router.delete("/deletedata",deleteShop);
router.patch('/adds',addproductlist);
router.delete('/product/delete/:id',deleteproductlist);


export default router