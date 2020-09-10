import React from 'react';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { IncomeExpenses } from './components/incomeExpense';
import { TransactionList } from './components/transactionList';
import { AddTransaction } from './components/addTransaction';

import { GlobalProvider } from './context/globalContext';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      
      <div className="container">
      <Header />
        <Balance />
        
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
