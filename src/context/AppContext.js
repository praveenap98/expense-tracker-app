import { createContext, useReducer } from "react";

const initialState = {
    transactions : [
        {name : 'Camera', cost : 100.67, color : 'danger', id : Math.random()*100 },
        {name : 'Salary', cost : 800, color : 'success', id : Math.random()*100 },
        {name : 'Camera', cost : 100.67, color : 'danger', id : Math.random()*100 },
        {name : 'Salary', cost : 800, color : 'success', id : Math.random()*100 }
    ]
}

const AppReducer = (state, action) => {
    switch(action.type) {

        case "clear_history" : return {
            ...state,
            transactions : []
        }

        case "add_transaction" : return {
            ...state,
            transactions : [
                action.transaction, ...state.transactions
            ]
        }

        case "delete_transaction" : return {
            ...state,
            transactions : state.transactions.filter((transaction) => transaction.id !== action.id)
        }

        default : return state;
    }
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <AppContext.Provider value={{
            ...state, 
            dispatch : dispatch
        }}>
            {props.children}
        </AppContext.Provider>
    )
}