import '../assets/styles/common.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function List() {
  interface Foo {
    id: number;
    body: string;
    title: string;
    userId: number;
  }

  const [appState, setAppState] = useState<Foo[]>([]);

  const [loading, setLoading] = React.useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    axios
      .get(apiUrl)
      .then(resp => {
        // const allTask: Array<Foo> = resp.data;
        setAppState(resp?.data || []);
        console.log('allTask', resp?.data, appState);
      })
      .finally(() => {
        setLoading(false);
        console.log('loading', loading);
      });
  }, []);

  return (
    <>
      <div className="list">
        {loading ? (
          <p>loading</p>
        ) : (
          <div>
            {' '}
            <p>Список задач</p>
            {[...appState].map((x, i) => (
              <div key={i}>{x.id}</div>
            ))}
            <a href={`/detail/1`} className="list__item">
              1 задача
            </a>
            <a href={`/detail/2`} className="list__item">
              2 задача
            </a>{' '}
          </div>
        )}
      </div>
    </>
  );
}

export default List;
