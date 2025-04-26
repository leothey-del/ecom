import React from 'react';
import { useSearchParams } from 'react-router-dom';

const List = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');

  return <div>Search Results for: {name || 'No query'}</div>;
};

export default List;