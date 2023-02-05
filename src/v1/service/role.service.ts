import prisma from './../../config/db.config';
export const CreateRoleService = async (data) => {
    const { rolecode, rolename } = data
    if (rolecode && rolename) {
        const role = await prisma.role.create({
            data: {
                rolename: rolename,
                rolecode: rolecode,
            }
        })
        return role
    }
    else throw new Error("invalid field");

}
export const GetAllRoleService = async () => {
    const roles = await prisma.role.findMany();
    return roles
}