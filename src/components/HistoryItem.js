import React, { useContext } from "react";
import { AiFillCloseSquare } from 'react-icons/ai'
import { AppContext } from "../context/AppContext";


const HistoryItem = ({ item }) => {

    const {dispatch} = useContext(AppContext);

    const handleClick = () => {
        dispatch({type : "delete_transaction", id : item.id})
    }

    return( 
        <div className={`border-start border-5 border-${item.color} shadow-sm p-2 mb-1 d-flex justify-content-between align-items-center`}>
            <span>{item.name}</span>
            <div className="d-flex justify-content-between align-items-center">
                <span className={`text-${item.color} me-5`}>
                    {`${(item.color === 'success' ? '+' : '-')} ₹${parseFloat(item.cost).toFixed(2)}`}
                </span>
                <AiFillCloseSquare size='1.5em' className="bg-danger text-white" onClick={handleClick} role="button"/>
            </div>
            
        </div>
    )
}

export default HistoryItem;