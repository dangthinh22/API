import * as dotenv from "dotenv"
import app from "./v1/server"
dotenv.config()
app.listen(3000, () => {
    console.log("App is on port 3000");
})