import { Loader } from '../../components';
import { Task } from '../../components';
import { asyncRequest } from '../../api';
import { Tasks } from '../../types';
import { useQuery } from 'react-query';
import { useNavigate, generatePath } from 'react-router-dom';
import { RoutesPath } from '../../routesPath';
import { Outlet } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleButtonClick = (
    id: number | string,
    name: string,
    status?: string
  ) => {
    navigate(
      generatePath(RoutesPath.Detail, {
        id: `${id}`,
        name: name,
        status: status
      })
    );
  };

  return (
    <div className="w-full">
      <Outlet />
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p>Error</p>
      ) : (
        <div>
          {' '}
          <p className="font-bold">Список задач</p>
          <div className="flex gap-6">
            <div className="w-full shadow-sm rounded shadow-white gap-6 flex-col flex">
              <p className="font-bold">Открыта</p>
              {appState?.map(item =>
                Number(item.id) <= 20 ? (
                  <Task
                    id={item.id}
                    onClickTask={handleButtonClick}
                    name={`${item.id} задача`}
                    status={'open'}
                  />
                ) : (
                  ''
                )
              )}
            </div>
            <div className="w-full shadow-sm rounded shadow-white gap-6 flex-col flex">
              <p className="font-bold">В работе</p>
              {appState?.map(item =>
                Number(item.id) > 20 ? (
                  <Task
                    id={item.id}
                    onClickTask={handleButtonClick}
                    name={`${item.id} задача`}
                    status={'work'}
                  />
                ) : (
                  ''
                )
              )}
            </div>
            <div className="w-full shadow-sm rounded shadow-white gap-6 flex-col flex">
              <p className="font-bold">Завершена</p>
              {appState?.map(item =>
                Number(item.id) > 40 ? (
                  <Task
                    id={item.id}
                    onClickTask={handleButtonClick}
                    name={`${item.id} задача`}
                    status={'closed'}
                  />
                ) : (
                  ''
                )
              )}
            </div>
            <div className="w-full shadow-sm rounded shadow-white gap-6 flex-col flex">
              <p className="font-bold">Отменена</p>
              {appState?.map(item =>
                Number(item.id) > 60 ? (
                  <Task
                    id={item.id}
                    onClickTask={handleButtonClick}
                    name={`${item.id} задача`}
                    status={'canceled'}
                  />
                ) : (
                  ''
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
