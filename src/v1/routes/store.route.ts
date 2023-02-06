import { Router } from 'express';
import { CreateStore, GetAllStores, GetStoreById, InactiveStore } from '../controller';

const StoreRoute = Router();

StoreRoute.post("/store", CreateStore)
StoreRoute.get("/stores", GetAllStores)
StoreRoute.get("/store", GetStoreById)
StoreRoute.delete("/store", InactiveStore)
export default StoreRoute
