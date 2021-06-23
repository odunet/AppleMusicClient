import './App.css';
import Header from './components/common/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { store } from './store';
import { getData } from './APICalls';
import { types } from './types';

function App() {
  //Bring in dispatch
  const { dispatch } = useContext(store);

  //get user data | Music
  useEffect(() => {
    Promise.all([
      getData('https://itunes.apple.com/us/rss/topsongs/limit=100/json'),
      getData('https://itunes.apple.com/us/rss/topalbums/limit=100/json'),
    ]).then(([song, album]) => {
      dispatch({
        type: types.Load_Music,
        data: song.data.feed.entry,
      });
      dispatch({
        type: types.Load_Album,
        data: album.data.feed.entry,
      });
    });
  }, []);

  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  );
}

export default App;
