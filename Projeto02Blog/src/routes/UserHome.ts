import { Router } from "express";
import * as UserController from '../controllers/userHomeController'



const router = Router()

router.get("/usershome", UserController.usershome)

export default router