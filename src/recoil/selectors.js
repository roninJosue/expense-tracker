import {selector} from "recoil";
import {transactionListState} from "./atoms";

export const balanceState = selector({
  key: "balanceState",
  get: ({get}) => {
    const transactionList = get(transactionListState)
    const amounts = transactionList.map(transaction => transaction.amount)
    return amounts.reduce((acc, num) => acc + num, 0).toFixed(2)
  }
})

export const expenseStatsState = selector({
  key: "expenseStatsState",
  get: ({get}) => {
    const transactionList = get(transactionListState)
    const amounts = transactionList.map(transaction => transaction.amount)

    const income = amounts
      .filter(amount => amount >= 0)
      .reduce((acc, num) => acc + num, 0)
      .toFixed(2)

    const expense = amounts.filter(amount => amount < 0)
      .reduce((acc, num) => acc + num, 0) * -(1).toFixed(2)

    return {income, expense}
  }
})