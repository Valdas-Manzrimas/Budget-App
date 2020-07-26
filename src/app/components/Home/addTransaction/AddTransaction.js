import React from 'react';
import './AddTransaction.scss';

const AddTransaction = () => {
  return (
    <div className="main-container">
      <form>
        <div className="main-container__checkboxes">
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
        <div className="main-container__add-transaction">
          <input className="input-amount" type="number" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
