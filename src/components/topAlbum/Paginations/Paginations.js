import React from 'react';
import './Paginations.css';
import { useContext } from 'react';
import { store } from '../../../store';
import { Pagination } from './Pagination';

export default function Paginations() {
  const { state } = useContext(store);
  let pageList = [];
  for (let i = 1; i <= state.searchAlbum.TOTAL_PAGES; i++) {
    pageList.push(i);
  }

  return (
    <>
      <div className='pageNumbers'>
        {pageList.map((item, index) => (
          <Pagination key={index} pageNumber={item} divClass='standard' />
        ))}
      </div>
    </>
  );
}
