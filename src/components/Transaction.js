import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {transactionListState} from "../recoil/atoms";
import {removeItemAtIndex, updateLocalStorage} from "../utils";

export const Transaction = ({ transaction }) => {
  const [transactionList, setTransactionList] = useRecoilState(transactionListState);
  const [deleted, setDeleted] = useState(false);

  const index = transactionList.findIndex(listItem => listItem === transaction);

  useEffect(() => {
    if (deleted) {
      updateLocalStorage(transactionList);
      setDeleted(false);
    }
  }, [transactionList, deleted]);

  const removeTransaction = () => {
    const newList = removeItemAtIndex(transactionList, index);
    setTransactionList(_t => newList);
    setDeleted(true);
  }

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span> {sign}${Math.abs(transaction.amount)}</span>
      <button className='delete-btn' onClick={removeTransaction}>x</button>
    </li>
  )
}