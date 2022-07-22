import './App.css';
import {TransactionList} from "./components/TransactionList";
import {ExpenseStatus} from "./components/ExpenseStatus";
import {Balance} from "./components/Balance";

function App() {
  return (
    <div className="App">
      <Balance />
      <ExpenseStatus />
      <TransactionList />
    </div>
  );
}

export default App;
