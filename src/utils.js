export const removeItemAtIndex = (array, index) => [...array.slice(0, index), ...array.slice(index + 1)]

export const TRANSACTION_LIST_STORE = 'TRANSACTION_LIST'

export const updateLocalStorage = (transactionList) => {
    console.log(transactionList);
    localStorage.setItem(TRANSACTION_LIST_STORE, JSON.stringify(transactionList))
}