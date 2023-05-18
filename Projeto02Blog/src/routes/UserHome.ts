import { Router } from "express";
import * as UserHomeController from '../controllers/userHomeController'



const router = Router()

router.get("/home/user/usershome", UserHomeController.usershome)
router.get("/home/user/createhome", UserHomeController.usercreate)
router.post("/user/create", UserHomeController.save2)
router.get("/home/user/usersH", UserHomeController.usersH)

export default router