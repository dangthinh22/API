import prisma from './../../config/db.config';
export const CreateStoreService = async (data) => {
    let service = {
        statusCode: 0,
        message: null,
    }
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
        service.message = store;
        service.statusCode = 200;
    } catch (error) {
        console.log(error);
        service.message = error;
        service.statusCode = 200;
    }
    return service
}
export const GetAllStoresService = async () => {
    try {
        const stores = await prisma.store.findMany({
            select: {
                storeId: true,
                storeName: true,
                storeAddress: true,
                StoreCertificate: true,
                action: true,
                modifiedBy: true
            }, orderBy: {
                createdAt: "desc"
            }
        });
        return stores
    } catch (error) {
        console.log(error);

    }
}
export const GetStoreByIdSerive = async (storeId): Promise<any> => {
    // return new Promise<any>(async (resolve, reject) => {
    let service = {
        statusCode: 0,
        message: null
    }
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
        if (store) {
            service.message = store;
            service.statusCode = 200;
        } else {
            service.message = "Store Not Existed!";
            service.statusCode = 404;
        }
    }
    catch (error) {
        service.message = "Store Found Failed!";
        service.statusCode = 403;
        console.log(error);

    }
    return service
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

export const UpdateStoreService = async (data) => {
    let service = {
        statusCode: 0,
        message: ""
    }
    try {
        const { storeId, storeName, storeAddress, storeNumber, description } = data;
        const oldStore = await prisma.store.findUnique({
            where: {
                storeId: storeId
            }
        })
        if (!oldStore) {
            service.message = "Store not found!";
            service.statusCode = 404;
            return service
        }
        await prisma.store.update({
            where: {
                storeId: storeId,
            }, data: {
                storeName: storeName ? storeName : oldStore.storeName,
                storeAddress: storeName ? storeAddress : oldStore.storeAddress,
                storeNumber: storeNumber ? storeNumber : oldStore.storeNumber,
                description: description ? description : oldStore.description
            }
        })
        service.message = "Successfully Updated Store!";
        service.statusCode = 200;

    } catch (error) {
        service.message = "Failed Updated Store!";
        service.statusCode = 401;
        console.log(error);
    }
    return service
}