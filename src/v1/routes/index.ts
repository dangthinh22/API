import { Router } from "express"
import { GetAllRole, GetUser, Signin, createRole, createUser } from './../controller/index';

const router = Router()

router.post("/role", createRole)
router.post("/user", createUser)
router.get("/roles", GetAllRole)
router.get("/user/:username", GetUser)
router.post("/signin", Signin)

export default router