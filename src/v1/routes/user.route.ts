import { Router } from "express"
import { GetUser, CreateUser, GetAllUser, UpdateUser, InactiveUser } from './../controller';

const UserRouter = Router()


UserRouter.post("/user", CreateUser)
UserRouter.get("/user", GetUser)
UserRouter.get("/users", GetAllUser)
UserRouter.patch("/user", UpdateUser)
UserRouter.delete("/user", InactiveUser)
export default UserRouter