import './App.css';
import Header from './components/common/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPostAsync } from './actions';

function App() {
  //Bring in dispatch
  const dispatch = useDispatch();

  //get user data | Music
  useEffect(() => {
    dispatch(getPostAsync());
  });

  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  );
}

export default App;
