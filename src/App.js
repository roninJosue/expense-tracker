import './App.css';
import {TransactionList} from "./components/TransactionList";
import {ExpenseStatus} from "./components/ExpenseStatus";
import {Balance} from "./components/Balance";
import {NewTransaction} from "./components/NewTransaction";
import {Header} from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <ExpenseStatus />
      <TransactionList />
      <NewTransaction />
    </div>
  );
}

export default App;
