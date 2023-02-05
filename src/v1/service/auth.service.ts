import prisma from './../../config/db.config';
import { ComparePassword, createJWT } from '../helper';

export const SigninService = async (data) => {
    let message = {
        message: "",
        errCode: 0,
        role: "",
        token: ""
    }
    const { username, password } = data
    const user = await prisma.user.findUnique({
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