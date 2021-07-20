import { types } from '../types';

export default function reducer(state, action) {
  switch (action.type) {
    case types.Load_Album:
      return {
        topMusic: state.topMusic,
        topAlbum: [...state.topAlbum, ...action.data],
        searchAlbum: { ...state.searchAlbum, TOTAL_PAGES: action.totalPages },
        searchMusic: state.searchMusic,
      };
    case types.Load_Music:
      return {
        topAlbum: state.topAlbum,
        topMusic: [...state.topMusic, ...action.data],
        searchAlbum: state.searchAlbum,
        searchMusic: { ...state.searchMusic, TOTAL_PAGES: action.totalPages },
      };
    case types.Search_Data_Album:
      return {
        topMusic: state.topMusic,
        topAlbum: state.topAlbum,
        searchAlbum: { ...state.searchAlbum, bool: true, data: action.data },
        searchMusic: state.searchMusic,
      };
    case types.Change_Page:
      return {
        topMusic: state.topMusic,
        topAlbum: state.topAlbum,
        searchAlbum: {
          ...state.searchAlbum,
          CURRENT_PAGE: action.data.CURRENT_PAGE,
          SKIP: action.data.SKIP,
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
}
