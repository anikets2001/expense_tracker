import "./App.css";
import AddNew from "./Components/AddNew";
import Expenses from "./Components/Expenses";
import Header from "./Components/Header";
import History from "./Components/History";

function App() {
  return (
    <div className="app">
      <div className="content-wrapper">
        <Header />
        <Expenses/>
        <History/>
        <AddNew/>
      </div>
    </div>
  );
}

export default App;
