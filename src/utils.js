export const removeItemAtIndex = (array, index) => [...array.slice(0, index), ...array.slice(index + 1)]

export const TRANSACTION_LIST_STORE = 'TRANSACTION_LIST'