import { types } from '../types';
import { getData } from '../APICalls';

// Search data in List -Redux
const searchAlbum = (data) => ({
  type: types.Search_Data_Album,
  data: data,
});
const searchMusic = (data) => ({
  type: types.Search_Data_Music,
  data: data,
});

export const SearchDataAction = (type, searchKey, state) => {
  return async (dispatch) => {
    let pattern = new RegExp(searchKey, 'i');
    if (type === 'album') {
      let options = state.topAlbum.filter((item) => {
        return pattern.test(item['im:name']['label']);
      });
      dispatch(searchAlbum(options));
    } else {
      let options = state.topMusic.filter((item) => {
        return pattern.test(item['im:name']['label']);
      });
      dispatch(searchMusic(options));
    }
  };
};

// Get Post Action for Album
const getPostAlbum = (data) => ({
  type: types.Load_Album,
  data: data,
});
const getPostMusic = (data) => ({
  type: types.Load_Music,
  data: data,
});

export const getPostAsync = () => async (dispatch) => {
  let data = await Promise.all([
    getData('https://itunes.apple.com/us/rss/topsongs/limit=100/json'),
    getData('https://itunes.apple.com/us/rss/topalbums/limit=100/json'),
  ]);

  const [song, album] = data;

  dispatch(getPostMusic(song.data.feed.entry));
  dispatch(getPostAlbum(album.data.feed.entry));
};
