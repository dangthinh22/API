import { Router } from 'express';
import { CreateStore, GetAllStores, GetStoreById, InactiveStore, UpdateStore } from '../controller';

const StoreRoute = Router();

StoreRoute.post("/store", CreateStore)
StoreRoute.get("/stores", GetAllStores)
StoreRoute.get("/store", GetStoreById)
StoreRoute.delete("/store", InactiveStore)
StoreRoute.patch("/store", UpdateStore)
export default StoreRoute
