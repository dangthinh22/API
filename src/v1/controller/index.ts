import { CreateUser, GetUser, GetAllUser, UpdateUser, InactiveUser } from "./user.controller"
import { CreateRole, GetAllRole } from "./role.controller"
import { Signin } from './auth.controlelr';
import { CreateGender, GetAllGenders } from './gender.controller';
import { CreateStore, GetAllStores, GetStoreById, InactiveStore, UpdateStore } from './store.controller';



export {
    CreateUser, GetUser, GetAllUser, UpdateUser, InactiveUser,
    CreateRole, GetAllRole,
    CreateGender, GetAllGenders,
    CreateStore, GetAllStores, GetStoreById, InactiveStore, UpdateStore,
    Signin
}