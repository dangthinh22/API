import { Request, Response } from 'express';
import { CreateUserService, GetUserService, GetAllUsersService, UpdateUserService, InactiveUserService } from './../service';

export const CreateUser = async (req: Request, res: Response) => {
    const data = req.body
    try {
        const user = await CreateUserService(data)
        return res.status(200).json({ user })
    } catch (error) {
        console.log(error);
    }
}
export const GetUser = async (req: Request, res: Response) => {
    const userid = req.query.userid
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

export const GetAllUser = async (req: Request, res: Response) => {
    try {
        const users = await GetAllUsersService();
        return res.status(200).json(
            users
        )
    } catch (error) {
        console.log(error);

    }

}
export const UpdateUser = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const message = await UpdateUserService(data)
        return res.status(200).json(message)
    } catch (error) {
        console.log(error);
    }
}
export const InactiveUser = async (req: Request, res: Response) => {
    try {
        const userId = req.query.userid
        const message = await InactiveUserService(userId)
        return res.status(200).json(message)
    } catch (error) {
        console.log(error);

    }
}