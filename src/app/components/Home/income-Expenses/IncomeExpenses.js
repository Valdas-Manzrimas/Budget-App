import React, { useContext } from 'react';
import './IncomeExpenses.scss';
import { GlobalContext } from '../../../context/GlobalState';

import Balance from '../balance/Balance';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <>
      <div className="output-box">
        <div className="output-box__output-box-screen">
          <p>€{income}</p>
        </div>
        <div className="output-box__output-box-name">
          <span>Income</span>
        </div>
      </div>
      <div className="output-box">
        <div className="output-box__output-box-screen">
          <p>€{expense}</p>
        </div>
        <div className="output-box__output-box-name">
          <span>Expenses</span>
        </div>
      </div>
      <div className="output-box">
        <Balance />
        <div className="output-box__output-box-name">
          <span>Balance</span>
        </div>
      </div>
    </>
  );
};

export default IncomeExpenses;
