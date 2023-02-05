import { Router } from "express"
import RoleRouter from './role.route';
import UserRouter from "./user.route";
import AuthRouter from './auth.route';
import GenderRouter from './gender.route';
import StoreRoute from './store.route';

const router = Router()

router.use(RoleRouter)
router.use(UserRouter)
router.use(AuthRouter)
router.use(GenderRouter)
router.use(StoreRoute)


export default router