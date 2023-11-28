import { Link, generatePath } from 'react-router-dom';
import { RoutesPath } from '../../routesPath';
import React, { useEffect, useState } from 'react';
import { Loader } from '../../components';
import { asyncRequest } from '../../api';
import { Tasks } from '../../types';

export const TaskList = () => {
  const [appState, setAppState] = useState<Tasks | null>(null);

  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    setLoading(true);
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    asyncRequest(apiUrl)
      .then(resp => {
        setAppState(resp);
      })
      .finally(() => {
        setLoading(false);
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
          {appState?.map(item => (
            <Link
              key={item.id}
              to={generatePath(RoutesPath.Detail, { id: item.id })}
              className="block"
            >
              {item.id} задача
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
