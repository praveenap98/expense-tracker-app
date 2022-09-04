import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HistoryList from './components/HistoryList'
import { AppProvider } from './context/AppContext';
import TransactionInput from './components/TransactionInput';

ReactDOM.render(
    <AppProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' index element={<App />}/>
                <Route path='history' element={<HistoryList />}/>
                <Route path='add_expense' element={<TransactionInput />}></Route>
            </Routes>
        </BrowserRouter>
    </AppProvider>
    ,
    document.getElementById('root')
)