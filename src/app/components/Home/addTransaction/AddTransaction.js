import React, { useContext, useState } from 'react';
import uniqid from 'uniqid';
import './AddTransaction.scss';

import { GlobalContext, GlobalProvider } from '../../../context/GlobalState';

import NavButton from '../../common/navButton/NavButton';

const AddTransaction = () => {
  console.log(GlobalContext);
  console.log(useContext(GlobalContext));
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [now, setNow] = useState(new Date().toLocaleString());
  const [sign, setSign] = useState('');

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
    console.log(newTransaction);
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
            <input type="radio" value="Expenses" name="input" />
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
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            className="input-amount"
            type="text"
            placeholder="Comment..."
            onChange={(e) => setText(e.target.value)}
          />
          <NavButton type="submit">Submit</NavButton>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
