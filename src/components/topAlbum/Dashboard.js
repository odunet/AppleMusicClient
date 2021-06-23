import React from 'react';
import { Card, Dash } from '../../styledComponents';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const state = useSelector((state) => state);

  return (
    <Dash>
      {!state.searchAlbum.bool
        ? state.topAlbum.map((item, index) => (
            <Card key={index}>{item['im:name']['label']}</Card>
          ))
        : state.searchAlbum.data.map((item, index) => (
            <Card key={index}>{item['im:name']['label']}</Card>
          ))}
    </Dash>
  );
}
