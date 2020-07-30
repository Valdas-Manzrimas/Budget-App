import React, { useContext, useEffect } from 'react';
import './TransactionList.scss';

import { Transaction } from '../transaction/Transaction';
import { GlobalContext } from '../../../context/GlobalState';

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>My transaction history</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
