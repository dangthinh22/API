import prisma from "../../config/db.config"
import { ComparePassword, HashPassword, createJWT } from './auth';

// export const SignInService = async (data) => {
//     const {fullname,number,username,password,}
//     const user = await prisma.user.create({

//     })
// }

export const CreateRoleService = async (data) => {
    if (data) {
        const role = await prisma.role.create({
            data: {
                rolename: data
            }
        })
        return role
    }
    else throw new Error("data not valid");

}
export const GetAllRoleService = async () => {
    const roles = await prisma.role.findMany();
    return roles
}

export const CreateUserService = async (data) => {
    const { fullname, number, username, password, roleId } = data;

    const hashedPassword = await HashPassword(password)
    const user = await prisma.user.create({
        data: {
            fullname: fullname,
            number: number,
            username: username,
            password: hashedPassword,
            role: roleId
        }
    })
    return user

}

export const GetUserService = async (data) => {
    const user = await prisma.user.findUnique({
        where: {
            username: data
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
export const SigninService = async (data) => {
    let message = {
        message: "",
        errCode: 0,
        role: "",
        token: ""
    }
    const { username, password } = data
    const user = prisma.user.findUnique({
        where: {
            username: username
        }, select: {
            userId: true,
            username: true,
            password: true,
            roleId: {
                select: {
                    roleId: true,
                    rolename: true
                }
            }
        }
    })
    if (user) {
        const isValid = await ComparePassword(password, (await user).password);
        if (isValid) {
            const data = {
                username: (await user).username,
                userId: (await user).userId,
                role: (await user).roleId.rolename
            }
            const token = await createJWT(data)
            message.message = "Login Sucess";
            message.errCode = 0;
            message.role = (await user).roleId.rolename,
                message.token = token
            return message
        }
        else {
            message.message = "Incorect Password"
            message.errCode = 1
            return message
        }
    }
    else {
        message.message = "User not found"
        message.errCode = 1
        return message
    }
}