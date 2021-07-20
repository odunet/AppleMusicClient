import React, { useContext } from 'react';
import { Card, Dash } from '../../styledComponents';
import { store } from '../../store';

export default function Dashboard() {
  const { state } = useContext(store);

  return (
    <Dash>
      {!state.searchAlbum.bool
        ? state.topAlbum.map((item, index) =>
            state.searchAlbum.PAGE_SIZE + state.searchAlbum.SKIP >= index &&
            state.searchAlbum.SKIP <= index ? (
              <Card key={index}>{item['im:name']['label']}</Card>
            ) : (
              ''
            )
          )
        : state.searchAlbum.data.map((item, index) =>
            state.searchAlbum.PAGE_SIZE + state.searchAlbum.SKIP >= index &&
            state.searchAlbum.SKIP <= index ? (
              <Card key={index}>{item['im:name']['label']}</Card>
            ) : (
              ''
            )
          )}
    </Dash>
  );
}
