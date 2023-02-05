import { Request, Response } from 'express';
import { CreateRoleService, GetAllRoleService } from './../service/role.service';

export const CreateRole = async (req: Request, res: Response) => {
    const data = req.body
    try {
        const role = await CreateRoleService(data)
        return res.status(200).json({
            role
        })
    } catch (error) {
        console.log(error);

    }
}
export const GetAllRole = async (req: Request, res: Response) => {
    try {
        const roles = await GetAllRoleService();
        return res.status(200).json({ roles })
    } catch (error) {
        console.log(error);
    }
}