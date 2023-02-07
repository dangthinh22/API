import { Router } from "express"
import { CreateGender, GetAllGenders } from "../controller"

const GenderRouter = Router()


GenderRouter.post("/gender", CreateGender)
GenderRouter.get("/genders", GetAllGenders)

export default GenderRouter