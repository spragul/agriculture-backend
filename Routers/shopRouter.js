import express from "express";
import { addShop,  deleteShop, editshop, getAllShop, getOneShop } from "../Controller/shopControll.js";
import { shopOwnerAuthentication, validate } from "../Authentication/auth.js";

const router =express.Router();
router.get('/',validate,getAllShop);
router.get('/:id',validate,getOneShop);
router.post("/adddata",shopOwnerAuthentication,addShop);
router.put("/editdata",shopOwnerAuthentication,editshop);
router.delete("/deletedata/:id",shopOwnerAuthentication,deleteShop);


export default router