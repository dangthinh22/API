import { Router } from 'express';
import { CreateStore, GetAllStores } from '../controller';

const StoreRoute = Router();

StoreRoute.post("/store", CreateStore)
StoreRoute.get("/stores", GetAllStores)
export default StoreRoute
