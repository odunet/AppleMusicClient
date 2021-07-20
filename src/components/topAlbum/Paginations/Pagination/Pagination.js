import React from 'react';
import { useContext } from 'react';
import { store } from '../../../../store';
import { types } from '../../../../types';

export default function Pagination({ divClass, pageNumber }) {
  const { dispatch, state } = useContext(store);

  let skip = (pageNumber - 1) * state.searchAlbum.PAGE_SIZE;

  const handleClick = () => {
    let payload = {
      SKIP: skip,
      CURRENT_PAGE: pageNumber,
    };
    console.log(payload);
    dispatch({ type: types.Change_Page, data: payload });
  };

  return (
    <button className={divClass} onClick={() => handleClick()}>
      {pageNumber}
    </button>
  );
}
