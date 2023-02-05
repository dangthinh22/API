import prisma from './../../config/db.config';
export const CreatGenderService = async (gender) => {
    if (gender) {
        const value = prisma.gender.create({
            data: {
                gender: gender,
            }
        })
        return value
    }
}