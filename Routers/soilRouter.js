import express from "express";
import { addsoil, deletesoil, editsoil, getAllsoil } from "../Controller/soilControll.js";


const router =express.Router();
router.get('/:id',getAllsoil);
router.post("/addsr/:id",addsoil);
router.put("/editsr",editsoil);
router.delete("/deletesr/:id",deletesoil);



export default router