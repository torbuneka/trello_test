import { useParams } from 'react-router-dom';
import { Button } from '../../components/elements/Button';
import { useNavigate, generatePath } from 'react-router-dom';
import { RoutesPath } from '../../routesPath';
import { useQuery } from 'react-query';
import { Tasks } from '../../types';

export const TaskDetail = () => {
  const { id } = useParams();
  const isPopupVisible = true;
  const navigate = useNavigate();

  const allTasks = useQuery<Tasks>('allTasks', {
    staleTime: 2000,
    enabled: true
  }).data;
  const data = allTasks ? allTasks.find(obj => obj.id == id) : undefined;

  console.log('data', data);

  const closeDetal = () => {
    navigate(RoutesPath.List);
  };

  const editTask = () => {
    navigate(generatePath(RoutesPath.Edit, { id }));
  };

  return (
    <>
      {isPopupVisible && data ? (
        <div className="popup flex flex-col justify-between">
          <p className="read-the-docs font-bold"> Name:</p>
          <p>{data.title || id + 'задача'} </p>
          <p className="read-the-docs font-bold"> Status:</p>
          <p>{data.status}</p>
          <div className="flex justify-between ">
            <Button color={'pink'} buttonText="Edit" onClick={editTask} />
            <Button color={'pink'} buttonText="Close" onClick={closeDetal} />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
