import React from "react";
import Status from "./components/Status";
import NavBar from "./components/NavBar";

const App = () => {
    return(
        <>
            <NavBar />
            {/* <div className="container">
                <Status /> 
                <h5 className="mt-4">History</h5>
                <hr />
                <HistoryList />
                <h5 className="mt-4">Add new transaction</h5>
                <hr />
                <TransactionInput />
            </div> */}
            <div className="container">
                <Status /> 
            </div>
        </>
    )
}

export default App;