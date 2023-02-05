import { CreatGenderService } from './../service';

export const CreateGender = async (req, res) => {
    const gender = req.body.gender;
    const value = await CreatGenderService(gender);
    return res.status(200).json({
        value
    })
}