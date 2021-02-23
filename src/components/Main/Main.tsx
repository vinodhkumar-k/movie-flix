import React from 'react';
import CollectionHolder from '../CollectionHolder/CollectionHolder';

const Main = () => {
  const filters = ['Now playing', 'Most popular', 'Top rated', 'Upcoming'];
  return (
    <>
      {filters.map((filter:string) => <CollectionHolder filter={filter}/>)}
    </>
  );
};

export default Main;