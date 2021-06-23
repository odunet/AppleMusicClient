import { types } from '../types';

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

const reduxRootReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.Load_Album:
      return {
        topMusic: state.topMusic,
        topAlbum: [...state.topAlbum, ...action.data],
        searchAlbum: state.searchAlbum,
        searchMusic: state.searchMusic,
      };
    case types.Load_Music:
      return {
        topAlbum: state.topAlbum,
        topMusic: [...state.topMusic, ...action.data],
        searchAlbum: state.searchAlbum,
        searchMusic: state.searchMusic,
      };
    case types.Search_Data_Album:
      return {
        topMusic: state.topMusic,
        topAlbum: state.topAlbum,
        searchAlbum: {
          bool: true,
          data: action.data,
        },
        searchMusic: state.searchMusic,
      };
    case types.Search_Data_Music:
      return {
        topMusic: state.topMusic,
        topAlbum: state.topAlbum,
        searchAlbum: state.searchAlbum,
        searchMusic: {
          bool: true,
          data: action.data,
        },
      };
    default:
      return state;
  }
};

export default reduxRootReducer;
