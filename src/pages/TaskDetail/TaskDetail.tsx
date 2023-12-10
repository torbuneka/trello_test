import { useParams } from 'react-router-dom';
import { Button } from '../../components/elements/Button';
import { useNavigate, generatePath } from 'react-router-dom';
import { RoutesPath } from '../../routesPath';

export const TaskDetail = () => {
  const { id } = useParams();
  const isPopupVisible = true;
  const navigate = useNavigate();

  const closeDetal = () => {
    navigate(RoutesPath.List);
  };
  const editTask = () => {
    navigate(generatePath(RoutesPath.Edit, { id: `${id}` }));
  };

  return (
    <>
      {isPopupVisible ? (
        <div className="popup flex flex-col justify-between">
          <p className="read-the-docs font-bold"> Наименование задачи:</p>
          <p>{`${id} задача`}</p>
          <div className="flex justify-between ">
            <Button
              color={'pink'}
              buttonText="Реактировать"
              onClick={editTask}
            />
            <Button color={'pink'} buttonText="Закрыть" onClick={closeDetal} />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
