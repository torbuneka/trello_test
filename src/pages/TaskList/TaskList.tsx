import { Link, generatePath } from 'react-router-dom';
import { RoutesPath } from '../../routesPath';
import { Loader } from '../../components';
import { asyncRequest } from '../../api';
import { Tasks } from '../../types';
import { useQuery } from 'react-query';

export const TaskList = () => {
  const {
    data: appState,
    isLoading,
    isError
  } = useQuery<Tasks>('tasks', async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const response = await asyncRequest(apiUrl);
    return response;
  });

  return (
    <div className="w-full">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p>Error</p>
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
