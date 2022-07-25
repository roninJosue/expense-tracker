import {useEffect} from "react";
import {useRecoilState} from "recoil";
import { transactionListState } from "../recoil/atoms";
import {Transaction} from "./Transaction";
import {TRANSACTION_LIST_STORE} from "../utils";

export const TransactionList = () => {
  const [transactionList, setTransactionList] = useRecoilState(transactionListState);

  useEffect(() => {
    setTransactionList(_t => JSON.parse(localStorage.getItem(TRANSACTION_LIST_STORE)));
  }, [setTransactionList]);

  return (
    <>
      <h3>Transaction history</h3>
      <ul className="list">
        {transactionList !== null && transactionList.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}