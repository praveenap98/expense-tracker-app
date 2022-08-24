import React from "react";

const HistoryItem = ({ item }) => {
    return( 
        <div className={`border-start border-5 border-${item.color} shadow-sm p-2 mb-1 d-flex justify-content-between align-items-center`}>
            <span>{item.name}</span>
            <span className={`text-${item.color}`}>
                {`${(item.color === 'success' ? '+' : '-')} ₹${parseFloat(item.cost).toFixed(2)}`}
            </span>
        </div>
    )
}

export default HistoryItem;