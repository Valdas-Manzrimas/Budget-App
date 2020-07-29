import React, { useContext, useState } from 'react';
import uniqid from 'uniqid';
import './AddTransaction.scss';

import { GlobalContext } from '../../../context/GlobalState';

import NavButton from '../../common/navButton/NavButton';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [now, setNow] = useState(new Date().toLocaleString());

  const onSubmit = (e) => {
    e.preventDefault();

    // const setTime = () => {
    //   setNow();
    // };

    const newTransaction = {
      id: uniqid(),
      text,
      time: now,
      amount: amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <div className="main-container">
      <form onSubmit={onSubmit}>
        <div className="main-container__checkboxes">
          {/* checkboxes */}
          <label htmlFor="Income">
            <input type="radio" value="Income" name="input" defaultChecked />
            Income
            <span className="checkmark"></span>
          </label>
          <label htmlFor="Expenses">
            <input
              type="radio"
              value="Expenses"
              name="input"
              onChange={() => setAmount(-Math.abs(amount))}
            />
            Expenses
            <span className="checkmark"></span>
          </label>
        </div>
        {/* inputs */}
        <div className="main-container__add-transaction">
          <input
            className="input-amount"
            type="number"
            placeholder="Your amount..."
            name="amount"
            onChange={(e) => setAmount(Number(e.target.value))}
            onSubmit={(e) => e.target.value === ''}
          />
          <input
            className="input-amount"
            type="text"
            placeholder="Comment..."
            name="comment"
            onChange={(e) => setText(e.target.value)}
          />
          <NavButton type="submit">Submit</NavButton>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
