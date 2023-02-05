export const checkIsEmpty = (data) => {
    return !(data && Object.keys(data).length === 0 && Object.getPrototypeOf(data) === Object.prototype)
}