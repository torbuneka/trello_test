import { Link, generatePath } from 'react-router-dom';
import { RoutesPath } from '../../routesPath';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from '../../components';
import * as z from 'zod';

const Task = z.object({
  id: z.number(),
  body: z.string().optional(),
  title: z.string(),
  userId: z.number().optional()
});

const TaskArray = z.array(Task);
type TaskArray = z.infer<typeof TaskArray>;

export const TaskList = () => {
  const [appState, setAppState] = useState<TaskArray | null>(null);

  const [loading, setLoading] = React.useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    axios
      .get(apiUrl)
      .then(resp => {
        setAppState(resp?.data);
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
          {appState?.map((x, i) => (
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
