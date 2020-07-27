import React from 'react';
import './AllTransactions.scss';

import TransactionList from '../../components/allTransactions/transactionList/TransactionList';

const AllTransactions = () => {
  return (
    <div className="all-transactions">
      <div className="all-transactions__container">
        <TransactionList />
      </div>
    </div>
  );
};

export default AllTransactions;
