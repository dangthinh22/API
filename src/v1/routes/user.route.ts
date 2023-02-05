import { Router } from "express"
import { GetUser, CreateUser, GetAllUser } from './../controller/user.controller';

const UserRouter = Router()


UserRouter.post("/user", CreateUser)
UserRouter.get("/user/:userid", GetUser)
UserRouter.get("/users", GetAllUser)


export default UserRouter