import React from "react";

const Form = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-md-3">
                    <label htmlFor="name">Transaction Name</label>
                    <input type='text' id="name" className='form-control form-control-sm mt-2' placeholder="Type the transaction name..."/>
                </div>
                <div className="col-md-3">
                <label htmlFor="cost">Amount</label>
                    <input type='text' id="cost" className='form-control form-control-sm mt-2' placeholder="Enter the amount..."/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-sm mt-2">Add</button>
        </>
    )
}

export default Form;