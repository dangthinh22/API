import { Request, Response } from 'express';
import { CreateStoreService, GetAllStoresService, GetStoreByIdSerive, InactiveStoreService } from './../service';
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
export const GetStoreById = async (req: Request, res: Response) => {
    try {
        const storeId = req.query.storeId;
        const store = await GetStoreByIdSerive(storeId);
        if (store) {
            return res.status(200).json(store);
        }
        return res.status(404).json({
            message: "Store Not Found!"
        })
    } catch (error) {
        console.log(error);
    }
}
export const InactiveStore = async (req: Request, res: Response) => {
    try {
        const storeId = req.query.storeId;
        const message = await InactiveStoreService(storeId);
        return res.status(message.statusCode === 400 ? 400 : 200).json(message)
    } catch (error) {
        console.log(error);

    }
}