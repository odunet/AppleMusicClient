import React, { useReducer, createContext } from 'react';
import reducer from '../reducers/rootReducer';

const initialState = {
  topMusic: [],
  topAlbum: [],
  searchMusic: {
    bool: false,
    data: [],
    PAGE_SIZE: 19,
    CURRENT_PAGE: 1,
    SKIP: 0,
    TOTAL_PAGES: 0,
  },
  searchAlbum: {
    bool: false,
    data: [],
    PAGE_SIZE: 19,
    CURRENT_PAGE: 1,
    SKIP: 0,
    TOTAL_PAGES: 0,
  },
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
