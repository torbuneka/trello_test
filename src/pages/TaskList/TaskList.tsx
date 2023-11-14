import { Link, generatePath } from 'react-router-dom';
import { RoutesPath } from '../../routesPath';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from '../../components';

export const TaskList = () => {
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
    <div className="w-full">
      {loading ? (
        <Loader />
      ) : (
        <div>
          {' '}
          <p className="font-bold">Список задач</p>
          {[...appState].map((x, i) => (
            <Link
              key={i}
              to={generatePath(RoutesPath.Detail, { id: x.id })}
              className="block"
            >
              {x.id} задача
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
