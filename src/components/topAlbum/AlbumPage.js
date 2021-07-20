import React from 'react';
import Dashboard from './Dashboard';
import { Paginations } from './Paginations';
import SearchBar from './SearchBar';

export default function AlbumPage() {
  return (
    <>
      <SearchBar />
      <Dashboard />
      <Paginations />
    </>
  );
}
