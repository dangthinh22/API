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