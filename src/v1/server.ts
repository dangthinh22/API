import express from "express"
import router from "./routes"
import morgan from "morgan"
import cors from "cors"


const app = express()


app.use(cors({
    origin: "*",
    credentials: true,
}))
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    return res.status(200).json({
        name: "API by MINHNGOC"
    })
})
app.use("/api/v1", router)
export default app