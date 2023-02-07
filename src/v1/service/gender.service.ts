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
export const GetAllGendersService = async () => {
    let service = {
        statusCode: 0,
        genders: null,
    }
    try {
        const genders = await prisma.gender.findMany({

        })
        service.statusCode = 200;
        service.genders = genders;
    } catch (error) {
        console.log(error);
        service.statusCode = 404;
    }
    return service;
}