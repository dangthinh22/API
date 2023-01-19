import { CreateRoleService } from "../service";
import { CreateUserService, GetAllRoleService, SigninService, GetUserService } from './../service/index';

export const createRole = async (req, res) => {
    const data = req.body.rolename
    try {
        const role = await CreateRoleService(data)
        return res.status(200).json({
            role
        })
    } catch (error) {
        console.log(error);

    }
}
export const GetAllRole = async (req, res) => {
    try {
        const roles = await GetAllRoleService();
        return res.status(200).json({ roles })
    } catch (error) {
        console.log(error);

    }
}
export const createUser = async (req, res) => {
    const data = req.body
    try {
        const user = await CreateUserService(data)
        return res.status(200).json({ user })
    } catch (error) {
        console.log(error);
    }
}
export const GetUser = async (req, res) => {
    const username = req.params.username
    try {
        const user = await GetUserService(username)
        return res.status(200).json({
            user
        })
    } catch (error) {
        console.log(error);

    }
}
export const Signin = async (req, res) => {
    const data = req.body
    try {
        const message = await SigninService(data)
        return res.status(200).json({
            message
        })
    } catch (error) {
        console.log(error);
    }
}