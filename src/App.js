import './App.css';
import {TransactionList} from "./components/TransactionList";
import {ExpenseStatus} from "./components/ExpenseStatus";

function App() {
  return (
    <div className="App">
      <ExpenseStatus />
      <TransactionList />
    </div>
  );
}

export default App;
