import { CreateUserService, GetUserService } from './../service';
import { GetAllUsersService } from './../service/user.service';

export const CreateUser = async (req, res) => {
    const data = req.body
    try {
        const user = await CreateUserService(data)
        return res.status(200).json({ user })
    } catch (error) {
        console.log(error);
    }
}
export const GetUser = async (req, res) => {
    const userid = req.params.userid
    try {
        const user = await GetUserService(userid)
        res.cookie("ABC", "ABC")
        return res.status(200).json({
            user
        })
    } catch (error) {
        console.log(error);
    }
}

export const GetAllUser = async (req, res) => {
    try {
        const users = await GetAllUsersService();
        return res.status(200).json([
            users
        ])
    } catch (error) {
        console.log(error);

    }

}
