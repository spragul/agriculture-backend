import express from "express"
import { addgovernment, allgovernment, changegovernment, deleteReview, deletegovernment, onegovernment, userreview } from "../Controller/governmentControll.js";
import { adminAuthentication, validate } from "../Authentication/auth.js";

const router=express.Router();

router.get('/',validate,allgovernment);
router.get("/:id",validate,onegovernment);
router.post('/addgs',adminAuthentication,addgovernment);
router.put('/editgs',adminAuthentication,changegovernment);
router.delete("/deletegs/:id",adminAuthentication,deletegovernment);
router.patch('/user/review/:id',validate,userreview);
router.patch('/user/review/delete/:id',validate,deleteReview)

export default router