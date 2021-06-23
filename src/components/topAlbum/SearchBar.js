import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Search, IconDiv, SearchDiv } from '../../styledComponents';
import { SearchDataAction } from '../../actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function SearchBar() {
  let [text, setText] = useState('');
  let dispatch = useDispatch();

  let state = useSelector((state) => state);

  const handleClick = () => {
    dispatch(SearchDataAction('album', text, state));
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
          <BsSearch onClick={() => handleClick()} />
        </IconDiv>
      </SearchDiv>
    </>
  );
}
