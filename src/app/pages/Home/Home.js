import React, { useContext } from 'react';
import './Home.scss';

import AddTransaction from '../../components/Home/addTransaction/AddTransaction';
import IncomeExpenses from '../../components/Home/income-Expenses/IncomeExpenses';

function Home() {
  return (
    <div className="Home">
      <div className="BudgetCounter">
        <h3>Budget Counter</h3>
        <AddTransaction />

        <div className="BudgetCounter__output-container">
          <IncomeExpenses />
        </div>
      </div>
    </div>
  );
}

export default Home;
