import React, { useContext } from 'react';
import './Home.scss';

import Header from '../../components/Home/header/Header.js';
import AddTransaction from '../../components/Home/addTransaction/AddTransaction';
import IncomeExpenses from '../../components/Home/income-Expenses/IncomeExpenses';
import Balance from '../../components/Home/balance/Balance';

function Home() {
  return (
    <div className="Home">
      <div className="BudgetCounter">
        <Header />
        <AddTransaction />

        <div className="BudgetCounter__output-container">
          <IncomeExpenses />
          <Balance />
        </div>
      </div>
    </div>
  );
}

export default Home;
