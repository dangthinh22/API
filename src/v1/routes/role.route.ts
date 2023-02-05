import { Router } from "express"
import { GetAllRole, CreateRole } from './../controller';

const RoleRouter = Router()

RoleRouter.post("/role", CreateRole)
RoleRouter.get("/roles", GetAllRole)
// router.get("/user/:username", GetUser)
// router.post("/signin", Signin)
// router.post("/gender", CreateGender)

export default RoleRouter