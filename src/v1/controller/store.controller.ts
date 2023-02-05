import { Request, Response } from 'express';
import { CreateStoreService } from './../service/store.service';
export const CreateStore = async (req: Request, res: Response) => {
    const data = req.body
    try {
        const store = await CreateStoreService(data);
        return res.status(200).json(
            store
        )
    } catch (error) {
        console.log(error);
    }
}