import { CreateRoleService, GetAllRoleService } from "./role.service";
import { SigninService } from './auth.service';
import { CreateUserService, GetUserService, GetAllUsersService, UpdateUserService, InactiveUserService } from './user.service';
import { CreatGenderService, GetAllGendersService } from "./gender.service";
import { CreateStoreService, GetAllStoresService, GetStoreByIdSerive, InactiveStoreService, UpdateStoreService } from './store.service';



export {
    CreateUserService, GetUserService, GetAllUsersService, UpdateUserService, InactiveUserService,
    CreateRoleService, GetAllRoleService,
    CreatGenderService, GetAllGendersService,
    CreateStoreService, GetAllStoresService, GetStoreByIdSerive, InactiveStoreService, UpdateStoreService,
    SigninService
}