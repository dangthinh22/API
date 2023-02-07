import { Request, Response } from 'express';
import { CreateStoreService, GetAllStoresService, GetStoreByIdSerive, InactiveStoreService, UpdateStoreService } from './../service';
export const CreateStore = async (req: Request, res: Response) => {
    const data = req.body
    try {
        const message = await CreateStoreService(data);
        return res.status(message.statusCode).json(
            {
                statusCode: message.statusCode,
                message: message.message
            }
        )
    } catch (error) {
        console.log(error);
    }
}
export const GetAllStores = async (req: Request, res: Response) => {
    try {
        const stores = await GetAllStoresService();
        return res.status(200).json({
            statusCode: 200,
            stores: stores
        })
    } catch (error) {
        console.log(error);
    }
}
export const GetStoreById = async (req: Request, res: Response) => {
    try {
        const storeId = req.query.storeId;
        const message = await GetStoreByIdSerive(storeId);
        return res.status(message.statusCode).json({
            statusCode: message.statusCode,
            store: message.message
        })
    } catch (error) {
        console.log(error);
    }
}
export const InactiveStore = async (req: Request, res: Response) => {
    try {
        const storeId = req.query.storeId;
        const message = await InactiveStoreService(storeId);
        return res.status(message.statusCode).json(message)
    } catch (error) {
        console.log(error);

    }
}
export const UpdateStore = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const message = await UpdateStoreService(data)
        return res.status(message.statusCode).json({
            statusCode: message.statusCode,
            message: message.message,
        })
    } catch (error) {

    }
}