import React from 'react';
import './IncomeExpenses.scss';

const IncomeExpenses = () => {
  return (
    <>
      <div className="output-box">
        <div className="output-box__output-box-screen">
          <p></p>
        </div>
        <div className="output-box__output-box-name">
          <span>Income</span>
        </div>
      </div>
      <div className="output-box">
        <div className="output-box__output-box-screen">
          <p></p>
        </div>
        <div className="output-box__output-box-name">
          <span>Expenses</span>
        </div>
      </div>
    </>
  );
};

export default IncomeExpenses;
