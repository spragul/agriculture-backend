import express from "express"
import { addvegetable, allVegetable, changeVegetable, changeprice, deleteVegetable, oneVegetable } from "../Controller/vegetablecontroll.js";
import { marketpersonAuthentication, validate } from "../Authentication/auth.js";
const router=express.Router();

router.get('/',validate,allVegetable);
router.get("/:id",validate,oneVegetable);
router.post('/add',marketpersonAuthentication,addvegetable);
router.put('/edit',marketpersonAuthentication,changeVegetable);
router.delete("/delete",marketpersonAuthentication,deleteVegetable);
router.patch('/price',marketpersonAuthentication,changeprice);

export default router