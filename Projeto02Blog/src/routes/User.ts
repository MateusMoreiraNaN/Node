import { Router } from "express";
import * as UserController from '../controllers/userController'

const router = Router()

router.get("/admin/users", UserController.users)
router.get("/admin/users/create", UserController.createUser)
router.post("/users/create", UserController.save)
router.get("/admin/users/index", UserController.adminIndex)


export default router