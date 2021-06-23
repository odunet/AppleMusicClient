// Redux imports
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxRootReducer from '../reducers/reduxInitialReducer';

// Redux store code
const middleware = [thunk, logger];
const initialStateRedux = {
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
const reduxStore = createStore(
  reduxRootReducer,
  initialStateRedux,
  applyMiddleware(...middleware)
);

export default reduxStore;
