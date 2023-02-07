import { HashPassword } from "../helper";
import prisma from './../../config/db.config';
import { SigninService } from './auth.service';
import { GetUserRole } from './role.service';


export const CreateUserService = async (data) => {
    let service = {
        statusCode: 0,
        message: null
    }
    const { firstname, lastname, genderId, nationalId, email, phonenumber, password, roleId, image } = data;
    try {
        const oldUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (oldUser) {
            service.statusCode = 500;
            service.message = "Email Already Used!"
            return service
        }
        const userrole = await GetUserRole()
        const hashedPassword = await HashPassword(password)
        const login = {
            email: email,
            password: password
        }
        await prisma.user.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                gender: +genderId,
                nationalId: nationalId,
                email: email,
                phonenumber: phonenumber,
                password: hashedPassword,
                role: roleId || userrole,
                image: image
                // action: action
            }
        })
        service.statusCode = 200;
        service.message = await SigninService(login)

    } catch (error) {
        console.log(error);
        service.statusCode = 400;
        service.message = "Create User Failed"
    }
    return service;
}

export const GetUserService = async (data) => {
    let service = {
        statusCode: 0,
        message: null
    }
    try {
        const user = await prisma.user.findUnique({
            where: {
                userId: data
            }, select: {
                userId: true,
                firstname: true,
                lastname: true,
                gender: true,
                nationalId: true,
                email: true,
                phonenumber: true,
                action: true,
                roleId: {
                    select: {
                        rolename: true
                    }
                },
            }
        })
        if (user) {
            service.statusCode = 200;
            service.message = user
        }
        else {
            service.statusCode = 404;
            service.message = "User Not Found!"
        }
    } catch (error) {
        console.log(error);
        service.statusCode = 400;
        service.message = "Get User Failed!"
    }
    return service
}
export const GetAllUsersService = async () => {
    let service = {
        statusCode: 0,
        users: null
    }
    try {
        const users = await prisma.user.findMany({
            select: {
                userId: true,
                firstname: true,
                lastname: true,
                gender: true,
                nationalId: true,
                email: true,
                phonenumber: true,
                action: true,
                roleId: {
                    select: {
                        roleId: true,
                        rolename: true
                    }
                },
            }, orderBy: {
                createdAt: "desc"
            }
        })
        service.statusCode = 200;
        service.users = users
    } catch (error) {
        console.log(error);
        service.statusCode = 400;
        service.users = "Get All Users Failed!"
    }
    return service
}
export const UpdateUserService = async (data) => {
    let service = {
        statusCode: 0,
        message: null
    }
    const { userId, firstname, lastname, gender, nationalId, email, phonenumber } = data
    try {
        const oldUser = await (await GetUserService(userId)).message;
        if (!oldUser) {
            service.statusCode = 404;
            service.message = "User Not Found!"
        }
        await prisma.user.update({
            where: {
                userId: userId,
            }, data: {
                firstname: firstname || oldUser.firstname,
                lastname: lastname || oldUser.lastname,
                gender: gender || oldUser.gender,
                nationalId: nationalId || oldUser.nationalId,
                email: email || oldUser.email,
                phonenumber: phonenumber || oldUser.phonenumber
            }
        })
        service.statusCode = 200;
        service.message = "Update User Successfully!"
    } catch (error) {
        service.statusCode = 400;
        service.message = "Update User Failed!"
    }
    return service
}
export const InactiveUserService = async (data) => {
    let service = {
        statusCode: 0,
        message: null
    }
    const userId = data
    try {
        const oldUser = await (await GetUserService(userId)).message;
        // if (oldUser === "User Not Found!") {
        //     service.statusCode = 404;
        //     service.message = "User Not Found!"
        // }
        await prisma.user.update({
            where: {
                userId: userId,
            }, data: {
                action: oldUser.action === 0 ? 1 : 0
            }
        })
        service.statusCode = 200;
        service.message = oldUser.action === 1 ? "User Inactived" : "User Actived"
    } catch (error) {
        console.log(error);
        service.statusCode = 400;
        service.message = "Inactived/Actived User Failed!"
    }
    return service
}