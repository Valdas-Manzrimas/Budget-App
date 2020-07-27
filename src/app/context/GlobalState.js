import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: 'Geles', amount: -20 },
    { id: 2, text: 'Alga', amount: 300 },
    { id: 3, text: 'Knyga', amount: -10 },
    { id: 4, text: 'Kamera', amount: 150 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions

  function deleteTransaction(id) {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  }

  function addTransaction(transaction) {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
