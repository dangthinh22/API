import * as bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const HashPassword = (password) => {
    return bcrypt.hash(password, 5)
}
export const ComparePassword = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)
}
export const createJWT = async (data) => {
    const { userId, username, role } = data
    const token = jwt.sign({
        userId: userId, username: username, role: role
    }, process.env.JWT_SECRECT)
    return token
}