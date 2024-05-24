import express from "express";
import { addsoil, deletesoil, editsoil, getAllsoil } from "../Controller/soilControll.js";
import { adminAuthentication, validate } from "../Authentication/auth.js";


const router =express.Router();
router.get('/:id',validate,getAllsoil);
router.post("/addsr/:id",adminAuthentication,addsoil);
router.put("/editsr",adminAuthentication,editsoil);
router.delete("/deletesr/:id",adminAuthentication,deletesoil);



export default router