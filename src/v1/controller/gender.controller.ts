import { CreatGenderService, GetAllGendersService } from './../service';
import { Request, Response } from 'express';

export const CreateGender = async (req: Request, res: Response) => {
    const gender = req.body.gender;
    const value = await CreatGenderService(gender);
    return res.status(200).json({
        value
    })
}
export const GetAllGenders = async (req: Request, res: Response) => {
    const message = await GetAllGendersService();
    return res.status(message.statusCode).json({
        statusCode: message.statusCode,
        genders: message.genders
    })
}