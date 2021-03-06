import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = Number(amounts.reduce((acc, item) => (acc += item), 0)).toFixed(
    2
  );

  return (
    <div className="output-box__output-box-screen">
      <p>€{total}</p>
    </div>
  );
};

export default Balance;
