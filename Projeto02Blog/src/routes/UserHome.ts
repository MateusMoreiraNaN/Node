import { Router } from "express";
import * as UserHomeController from '../controllers/userHomeController'



const router = Router()

router.get("/usershome", UserHomeController.usershome)
router.get("/user/createhome", UserHomeController.usercreate)

export default router