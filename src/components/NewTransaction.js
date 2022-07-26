import {useEffect, useState} from "react";
import { useRecoilState } from "recoil";
import {v4 as uuidv4} from "uuid";
import {transactionListState} from "../recoil/atoms";
import { updateLocalStorage } from "../utils";

export const NewTransaction = () => {
  const [textValue, setTextValue] = useState("");
  const [amount, setAmount] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [transactionList, setTransactionList] = useRecoilState(transactionListState);

  useEffect(() => {
    if (isSaved) {
      updateLocalStorage(transactionList);
    }
  }, [isSaved, transactionList]);

  const newTransaction = e => {
    e.preventDefault();
    setTransactionList(prevTransactionList => [
      ...prevTransactionList,
      {
        id: uuidv4(),
        text: textValue,
        amount: +amount
      }
    ])
    setTextValue("");
    setAmount(0);
    setIsSaved(true);
  }

  const handleTextValue = e => {
    setTextValue(e.target.value);
  }

  const handleAmount = e => {
    setAmount(e.target.value);
  }

  return (
    <>
      <h3>Add a new transaction</h3>
      <form>
        <div>
          <label htmlFor="text">Description</label>
          <input type="text" id="text" value={textValue} onChange={handleTextValue}/>
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" value={amount} onChange={handleAmount}/>
        </div>
        <button type="button" onClick={newTransaction}>Add transaction</button>
      </form>
    </>
  )
}