import { CreatGenderService } from './../service';
import { Request, Response } from 'express';

export const CreateGender = async (req: Request, res: Response) => {
    const gender = req.body.gender;
    const value = await CreatGenderService(gender);
    return res.status(200).json({
        value
    })
}