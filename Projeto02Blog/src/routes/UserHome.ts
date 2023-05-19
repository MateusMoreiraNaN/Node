import { Router } from "express";
import * as UserHomeController from '../controllers/userHomeController'
import homeAuth from "../Middlewares/authenticatehome";



const router = Router()

router.get("/userhome/usershome", homeAuth, UserHomeController.usershome)
router.get("/userhome/createhome", homeAuth, UserHomeController.usercreate)
router.get("/userhome/loginhome", UserHomeController.loginhome)
router.post("/user/create", UserHomeController.save2)
router.get("/userhome/usersH", homeAuth, UserHomeController.usersH)
router.post('/authenticateHome', UserHomeController.authenticateHome)

export default router