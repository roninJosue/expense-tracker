import {useEffect} from "react";
import {useRecoilState} from "recoil";
import { transactionListState } from "../recoil/atoms";
import {Transaction} from "./Transaction";

export const TransactionList = () => {
  const [transactionList, setTransactionList] = useRecoilState(transactionListState);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("transactionList")))
    setTransactionList(JSON.parse(localStorage.getItem("transactionList")));
  }, [setTransactionList]);
console.log(transactionList)
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