import { Router } from "express"
import { CreateGender } from "../controller"

const GenderRouter = Router()


GenderRouter.post("/gender", CreateGender)


export default GenderRouter