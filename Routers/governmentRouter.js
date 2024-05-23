import express from "express"
import { addgovernment, allgovernment, changegovernment, deleteReview, deletegovernment, onegovernment, userreview } from "../Controller/governmentControll.js";

const router=express.Router();

router.get('/',allgovernment);
router.get("/:id",onegovernment);
router.post('/addgs',addgovernment);
router.put('/editgs',changegovernment);
router.delete("/deletegs/:id",deletegovernment);
router.patch('/user/review/:id',userreview);
router.patch('/user/review/delete/:id',deleteReview)

export default router