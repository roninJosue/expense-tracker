import { useRecoilValue } from "recoil";
import { transactionListState } from "../recoil/atoms";
import {Transaction} from "./Transaction";

export const TransactionList = () => {
  const transactionList = useRecoilValue(transactionListState);
  return (
    <>
      <h3>Transaction history</h3>
      <ul className="list">
        {transactionList.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}