import React, { useReducer, createContext } from 'react';
import reducer from '../reducers/rootReducer';

const initialState = {
  topMusic: [],
  topAlbum: [],
  searchMusic: {
    bool: false,
    data: [],
  },
  searchAlbum: {
    bool: false,
    data: [],
  },
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
