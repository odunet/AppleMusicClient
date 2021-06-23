import React, { useContext } from 'react';
import { Card, Dash } from '../../styledComponents';
import { store } from '../../store';

export default function Dashboard() {
  const { dispatch, state } = useContext(store);

  return (
    <>
      <Dash>
        {!state.searchMusic.bool
          ? state.topMusic.map((item, index) => (
              <Card key={index}>{item['im:name']['label']}</Card>
            ))
          : state.searchMusic.data.map((item, index) => (
              <Card key={index}>{item['im:name']['label']}</Card>
            ))}
      </Dash>
    </>
  );
}
