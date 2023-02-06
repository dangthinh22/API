import { Request, Response } from 'express';
import { CreateStoreService, GetAllStoresService, } from './../service';
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
export const GetAllStores = async (req: Request, res: Response) => {
    try {
        const stores = await GetAllStoresService();
        return res.status(200).json(stores)
    } catch (error) {
        console.log(error);
    }
}