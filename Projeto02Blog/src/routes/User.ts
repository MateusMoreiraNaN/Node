import { Router } from "express";
import * as UserController from '../controllers/userController'
import adminAuth from '../Middlewares/authenticate'


const router = Router()

router.get("/admin/users",adminAuth, UserController.users)
router.get("/admin/users/login",UserController.login)
router.get("/admin/users/create", UserController.createUser)
router.post("/users/create",UserController.save)
router.get("/admin/users/index", adminAuth,UserController.adminIndex)

router.post("/authenticate",UserController.authenticate)


export default router