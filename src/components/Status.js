import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Status = () => {

    const { transactions} = useContext(AppContext);
    let totalExpense = 0;
    let totalIncome = 0;

    const calculate = (transactions, color) => {
        let total = 0;

        for(let transaction of transactions) {
            if(transaction.color === color)
            total += transaction.cost
        }

        return total;
    }

    totalExpense = calculate(transactions, 'danger')
    totalIncome = calculate(transactions, 'success')

    return(
        <div className="mt-4">
            <h6>YOUR BALANCE</h6>
            <h1>{`₹${parseFloat(totalIncome - totalExpense).toFixed(2)}`}</h1>
            <div className="shadow mt-3 d-flex justify-content-center p-3 align-items-center" style={{height:'100px', maxWidth:'350px'}}>
                <div className="d-flex flex-column align-items-center justify-content-between">
                    <h6>INCOME</h6>
                    <h6 className="text-success">{`₹${parseFloat(totalIncome).toFixed(2)}`}</h6>
                </div>

                <div className="vr mx-5"></div>
                
                <div className="d-flex flex-column align-items-center justify-content-between">
                    <h6>EXPENSE</h6>
                    <h6 className="text-danger">{`₹${parseFloat(totalExpense).toFixed(2)}`}</h6>
                </div>
            </div>

        </div>
    )
}

export default Status;