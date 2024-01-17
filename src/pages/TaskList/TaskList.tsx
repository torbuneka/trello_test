import { Task } from '../../components';
import { useNavigate, generatePath } from 'react-router-dom';
import { RoutesPath } from '../../routesPath';
import { Outlet } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Tasks } from '../../types';

export const TaskList = () => {
  const navigate = useNavigate();

  const allTasks = useQuery<Tasks>('allTasks', {
    staleTime: 2000,
    enabled: true
  }).data;

  const handleButtonClick = (
    id: number | string,
    name: string,
    status?: string
  ) => {
    navigate(
      generatePath(RoutesPath.Detail, {
        id,
        name: name,
        status: status
      })
    );
  };

  return (
    <div className="w-full">
      <Outlet />

      <div>
        <div className="flex gap-6">
          <div className="w-full shadow-sm rounded shadow-white gap-6 flex-col flex">
            <p className="font-bold">Open</p>
            {allTasks?.map(item =>
              item.status == 'open' ? (
                <Task
                  key={item.id}
                  id={item.id}
                  onClickTask={handleButtonClick}
                  name={item.title}
                  status={'open'}
                />
              ) : (
                ''
              )
            )}
          </div>
          <div className="w-full shadow-sm rounded shadow-white gap-6 flex-col flex">
            <p className="font-bold">In progress</p>
            {allTasks?.map(item =>
              item.status == 'in progress' ? (
                <Task
                  key={item.id}
                  id={item.id}
                  onClickTask={handleButtonClick}
                  name={item.title}
                  status={'in progress'}
                />
              ) : (
                ''
              )
            )}
          </div>
          <div className="w-full shadow-sm rounded shadow-white gap-6 flex-col flex">
            <p className="font-bold">Closed</p>
            {allTasks?.map(item =>
              item.status == 'closed' ? (
                <Task
                  key={item.id}
                  id={item.id}
                  onClickTask={handleButtonClick}
                  name={item.title}
                  status={'closed'}
                />
              ) : (
                ''
              )
            )}
          </div>
          <div className="w-full shadow-sm rounded shadow-white gap-6 flex-col flex">
            <p className="font-bold">Canceled</p>
            {allTasks?.map(item =>
              item.status == 'canceled' ? (
                <Task
                  key={item.id}
                  id={item.id}
                  onClickTask={handleButtonClick}
                  name={item.title}
                  status={'canceled'}
                />
              ) : (
                ''
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
