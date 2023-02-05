import express, { Request, Response } from "express"
import router from "./routes"
import morgan from "morgan"
import cors from "cors"
import AuthRouter from './routes/auth.route';


const app = express()


app.use(cors({
    origin: "*",
    credentials: true,
}))
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
        name: "API by MINHNGOC"
    })
})
app.use("/auth", AuthRouter)
app.use("/api/v1", router)
export default app