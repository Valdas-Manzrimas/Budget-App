import React, { useContext } from 'react';
import './TransactionList.scss';

import { Transaction } from '../transaction/Transaction';
import { GlobalContext } from '../../../context/GlobalState';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>My transaction history</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
