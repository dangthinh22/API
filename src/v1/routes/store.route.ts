import { Router } from 'express';
import { CreateStore } from '../controller';

const StoreRoute = Router();

StoreRoute.post("/store", CreateStore)

export default StoreRoute
