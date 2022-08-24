import React from "react";

const TransactionType = ({setTransactionType}) => {

    const handleChange = (e) => {
        console.log(e.target.value)
        setTransactionType(e.target.value)
    }

    return(
        <div> 
            <div className="form-check">
                <input name="transaction_type" id='expense' type='radio' className="form-check-input" value='expense' onChange={handleChange} defaultChecked/>
                <label htmlFor="expense" className="form-check-label text-danger">Expense</label>
            </div>
            <div className="form-check">
                <input name="transaction_type" id="income" type='radio' className="form-check-input" value='income' onChange={handleChange}/>
                <label htmlFor="income" className="form-check-label text-success">Income</label>
            </div>
        </div>
    )
}

export default TransactionType;