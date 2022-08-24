import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import HistoryItem from "./HistoryItem";

const HistoryList = () => {

    const { transactions, dispatch } = useContext(AppContext);
    const Items = transactions;

    const handleClick = () => {
        dispatch({type : "clear_history"})
    }

    return(
        <div>
            

            {(Items.length > 0) ? (<>
                <div className={`shadow-sm p-2 mb-1 d-flex justify-content-between align-items-center bg-secondary text-light`}>
                <span>Transaction Name</span>
                <span>Amount</span>
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
        
    )
}

export default HistoryList;