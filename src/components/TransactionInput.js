import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Form from "./Form";
import NavBar from "./NavBar";
import TransactionType from "./TransactionType";

const TransactionInput = () => {

    const[transactionType, setTransactionType] = useState('expense')
    const {dispatch} = useContext(AppContext);

    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(transactionType, e.target[2].value, e.target[3].value);
        dispatch({type : "add_transaction", 
        transaction : {
            name : e.target[2].value, 
            //cost : parseFloat(parseFloat(e.target[3].value).toFixed(2)),
            cost : parseInt(e.target[3].value),
            color : `${(transactionType === 'expense') ? 'danger' : 'success'}`, 
            id : Math.random()*100 
        }})
    }

    return(
        <>
            <NavBar />
            <div className="mb-4 container">
                <h5 className="mt-4">Add new transaction</h5>
                <hr />
                <form onSubmit={handleSubmit}>
                    {/* radio buttons for choosing transaction type */}
                    <TransactionType setTransactionType={setTransactionType}/>

                    {/* Form input */}
                    <Form />
                </form>
            </div>
        </>
    )
}

export default TransactionInput;