import { checkIsEmpty } from "../helper"
import { SigninService } from "../service"

export const Signin = async (req, res) => {

    if (checkIsEmpty(req.query) || checkIsEmpty(req.params)) {
        return res.status(404).json({
            message: "URL not valid"
        })
    }
    const data = req.body
    try {
        const message = await SigninService(data)
        res.cookie("ABC", "ABC", { httpOnly: false })
        return res.status(200).json({
            message
        })
    } catch (error) {
        console.log(error);
    }
}
