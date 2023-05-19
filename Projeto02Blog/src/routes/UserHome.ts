import { Router } from "express";
import * as UserHomeController from '../controllers/userHomeController'



const router = Router()

router.get("/userhome/usershome", UserHomeController.usershome)
router.get("/userhome/createhome", UserHomeController.usercreate)
router.post("/user/create", UserHomeController.save2)
router.get("/userhome/usersH", UserHomeController.usersH)

export default router