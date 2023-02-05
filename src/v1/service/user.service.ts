import { HashPassword } from "../helper";
import prisma from './../../config/db.config';
import { SigninService } from './auth.service';


export const CreateUserService = async (data) => {
    const { firstname, lastname, genderId, nationalId, email, phonenumber, password, roleId, image } = data;

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
            role: roleId,
            image: image
            // action: action
        }
    })
    const message = await SigninService(login)
    return message;

}

export const GetUserService = async (data) => {
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
                    roleId: true,
                    rolename: true
                }
            },
        }
    })
    return user
}

export const GetAllUsersService = async () => {
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
        }
    })
    return users
}
export const UpdateUserService = async (data) => {
    let message = {
        message: ""
    }
    const { userId, firstname, lastname, gender, nationalId, email, phonenumber } = data
    const oldUser = await GetUserService(userId);
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
    message.message = "User Updated"
    return message
}
export const InactiveUserService = async (data) => {
    let message = {
        message: ""
    }
    const userId = data
    const oldUser = await GetUserService(userId);
    await prisma.user.update({
        where: {
            userId: userId,
        }, data: {
            action: oldUser.action === 0 ? 1 : 0
        }
    })
    message.message = oldUser.action === 1 ? "User Inactived" : "User Actived"
    return message
}