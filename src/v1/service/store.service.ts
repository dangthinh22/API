import prisma from './../../config/db.config';
export const CreateStoreService = async (data) => {
    const { storeName, storeAddress, storeNumber, description } = data
    try {
        const store = prisma.store.create({
            data: {
                storeName: storeName,
                storeAddress: storeAddress,
                storeNumber: storeNumber,
                description: description
            }
        })
        return store
    } catch (error) {
        console.log(error);
    }
}
export const GetAllStoresService = async () => {
    try {
        const stores = await prisma.store.findMany();
        return stores
    } catch (error) {
        console.log(error);

    }
}
export const GetStoreByIdSerive = async (storeId): Promise<any> => {
    // return new Promise<any>(async (resolve, reject) => {
    try {
        const store = await prisma.store.findUnique({
            where: {
                storeId: storeId,
            }, select: {
                storeId: true,
                storeName: true,
                storeAddress: true,
                storeNumber: true,
                description: true,
                action: true,
                modifiedBy: true,
            }
        })
        return store;
        // if (store) {
        //     return store
        // }
        // throw new Error("Store Not Found");
    }
    catch (error) {
        throw new Error(error);
    }
}
export const InactiveStoreService = async (storeId) => {
    let message = {
        statusCode: 1,
        message: "",
    }
    try {
        const oldStore = await prisma.store.findUnique({
            where: {
                storeId: storeId
            }, select: {
                storeId: true,
                action: true,
                modifiedBy: true,
            }
        })
        await prisma.store.update({
            where: {
                storeId: storeId
            }, data: {
                action: oldStore.action === 1 ? 0 : 1
            }
        })
        message.message = oldStore.action === 1 ? "Inactived!" : "Actived";
        message.statusCode = 200;
    } catch (error) {
        message.message = "Inactive/Active Failed";
        message.statusCode = 400;
        console.log(error);

    }
    return message;
}