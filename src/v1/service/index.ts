import { CreateRoleService, GetAllRoleService } from "./role.service";
import { SigninService } from './auth.service';
import { CreateUserService, GetUserService, GetAllUsersService } from './user.service';
import { CreatGenderService } from "./gender.service";
import { CreateStoreService } from './store.service';



export {
    CreateUserService, GetUserService, GetAllUsersService,
    CreateRoleService, GetAllRoleService,
    CreatGenderService,
    CreateStoreService,
    SigninService
}