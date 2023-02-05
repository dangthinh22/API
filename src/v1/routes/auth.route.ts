import { Router } from "express"
import { Signin } from "../controller"

const AuthRouter = Router()
AuthRouter.post("/signin", Signin)

export default AuthRouter
