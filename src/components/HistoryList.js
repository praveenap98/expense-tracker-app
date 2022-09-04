import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import HistoryItem from "./HistoryItem";
import NavBar from "./NavBar";

const HistoryList = () => {

    const { transactions, dispatch } = useContext(AppContext);
    const Items = transactions;

    const handleClick = () => {
        dispatch({type : "clear_history"})
    }

    return(
        <>
            <NavBar />
            <div className="container">
                <h5 className="mt-4">History</h5>
                <hr />
                {(Items.length > 0) ? (<>
                    <div className={`shadow-sm p-2 mb-1 d-flex justify-content-between align-items-center bg-secondary text-light`}>
                    <span>Transaction Name</span>
                    <div className="d-flex justify-content-between">
                    <span className="me-4">Amount</span>
                    <span>Action</span>
                    </div>
                    
                    </div>
                    {
                        Items.map((item) => <HistoryItem key={item.id} item={item}/>)
                    }
                    <button className="btn btn-primary btn-sm mt-3" onClick={handleClick}>Clear history</button>
                </>)
                : (
                    <span>No transactions found...</span>
                )}
            </div>
        </>
        
        
    )
}

export default HistoryList;