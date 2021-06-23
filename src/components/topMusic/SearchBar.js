import React, { useState, useContext } from 'react';
import { types } from '../../types';
import { BsSearch } from 'react-icons/bs';
import { Search, IconDiv, SearchDiv } from '../../styledComponents';
import { store } from '../../store';
import { SeachDataAction } from '../../actions';

export default function SearchBar() {
  let [text, setText] = useState('');
  const { dispatch, state } = useContext(store);

  const handleClick = (e) => {
    let searchOptions = SeachDataAction('music', text, state);
    dispatch({ type: types.Search_Data_Music, data: searchOptions });
  };

  return (
    <>
      <SearchDiv>
        <Search
          type='text'
          placeholder='Search for Content'
          onChange={(e) => setText(e.target.value)}
        />
        <IconDiv>
          <BsSearch onClick={(e) => handleClick(e)} />
        </IconDiv>
      </SearchDiv>
    </>
  );
}
