import React from "react";
import Status from "./components/Status";
import HistoryList from "./components/HistoryList";
import TransactionInput from "./components/TransactionInput";
import { AppProvider } from "./context/AppContext";

const App = () => {
    return(
        <AppProvider>
        <div className="container">
            <h4 className="mt-4">Expense Tracker</h4>
            <Status />
            <h5 className="mt-4">History</h5>
            <hr />
            <HistoryList />
            <h5 className="mt-4">Add new transaction</h5>
            <hr />
            <TransactionInput />
        </div>
        </AppProvider>
    )
}

export default App;