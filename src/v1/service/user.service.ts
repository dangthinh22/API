import { HashPassword } from "../helper";
import prisma from './../../config/db.config';
import { SigninService } from './auth.service';


export const CreateUserService = async (data) => {
    const { firstname, lastname, genderId, nationalId, email, phonenumber, username, password, roleId, image } = data;

    const hashedPassword = await HashPassword(password)
    const login = {
        username: username,
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
            username: username,
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
            username: true,
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
    const users = await prisma.user.findMany()
    return users
}