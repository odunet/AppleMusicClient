import React, { useContext } from 'react';
import { Card, Dash } from '../../styledComponents';
import { store } from '../../store';

export default function Dashboard() {
  const { state } = useContext(store);

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
