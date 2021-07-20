import './App.css';
import Header from './components/common/Header';
import React, { useContext, useEffect } from 'react';
import { store } from './store';
import { getData } from './APICalls';
import { types } from './types';

function App() {
  //Bring in dispatch
  const { dispatch } = useContext(store);

  let musicUrl = 'https://itunes.apple.com/us/rss/topsongs/limit=100/json';
  let albumUrl = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

  //get user data | Music
  useEffect(() => {
    async function apiCall() {
      Promise.all([getData(musicUrl), getData(albumUrl)]).then(
        ([song, album]) => {
          dispatch({
            type: types.Load_Music,
            data: song.data,
            totalPages: song.totalPages,
          });
          dispatch({
            type: types.Load_Album,
            data: album.data,
            totalPages: album.totalPages,
          });
        }
      );
    }
    apiCall();
  }, [albumUrl, dispatch, musicUrl]);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
