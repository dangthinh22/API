import { CreateUser, GetUser, GetAllUser } from "./user.controller"
import { CreateRole, GetAllRole } from "./role.controller"
import { Signin } from './auth.controlelr';
import { CreateGender } from './gender.controller';
import { CreateStore } from './store.controller';



export {
    CreateUser, GetUser, GetAllUser,
    CreateRole, GetAllRole,
    CreateGender,
    CreateStore,
    Signin
}