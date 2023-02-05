import prisma from './../../config/db.config';
import { ComparePassword, createJWT } from '../helper';

export const SigninService = async (data) => {
    let message = {
        message: "",
        errCode: 0,
        isLoggin: false,
        role: "",
        token: ""
    }
    const { email, password } = data
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }, select: {
            userId: true,
            password: true,
            action: true,
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
        if (isValid && user.action === 1) {
            const data = {
                email: email,
                userId: (await user).userId,
                role: (await user).roleId.rolename
            }
            const token = await createJWT(data)
            message.message = "Login Sucess";
            message.errCode = 0;
            message.isLoggin = true;
            message.role = (await user).roleId.rolename;
            message.token = token
            // return message
        }
        else if (!isValid) {
            message.message = "Incorect Password"
            message.errCode = 1
            // return message
        } else if (user.action !== 1) {
            message.message = "Log In Failed";
            message.errCode = 1
        }
    }
    else {
        message.message = "User not found"
        message.errCode = 1
    }
    return message
}