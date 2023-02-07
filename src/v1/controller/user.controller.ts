import { Request, Response } from 'express';
import { CreateUserService, GetUserService, GetAllUsersService, UpdateUserService, InactiveUserService } from './../service';

export const CreateUser = async (req: Request, res: Response) => {
    const data = req.body
    try {
        const message = await CreateUserService(data)
        return res.status(message.statusCode).json({
            statusCode: message.statusCode,
            message: message.message
        })
    } catch (error) {
        console.log(error);
    }
}
export const GetUser = async (req: Request, res: Response) => {
    const userid = req.query.userid
    try {
        const message = await GetUserService(userid)
        res.cookie("ABC", "ABC")
        return res.status(message.statusCode).json({
            statusCode: message.statusCode,
            user: message.message
        })
    } catch (error) {
        console.log(error);
    }
}

export const GetAllUser = async (req: Request, res: Response) => {
    try {
        const message = await GetAllUsersService();
        return res.status(message.statusCode).json(
            {
                statusCode: message.statusCode,
                users: message.users
            }
        )
    } catch (error) {
        console.log(error);
    }
}
export const UpdateUser = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const message = await UpdateUserService(data)
        return res.status(message.statusCode).json({
            statusCode: message.statusCode,
            message: message.message
        })
    } catch (error) {
        console.log(error);
    }
}
export const InactiveUser = async (req: Request, res: Response) => {
    try {
        const userId = req.query.userid
        const message = await InactiveUserService(userId)
        return res.status(message.statusCode).json({
            statusCode: message.statusCode,
            message: message.message
        })
    } catch (error) {
        console.log(error);

    }
}