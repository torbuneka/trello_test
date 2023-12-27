import { Button } from '../Button';
import { useNavigate, generatePath } from 'react-router-dom';
import { RoutesPath } from '../../../routesPath';

export interface TaskProps {
  name: string;
  status?: string;
  id: number | string;
  onClickTask?: (id: number | string, name: string, status?: string) => void;
}

export const Task = (props: TaskProps) => {
  const { name, status, onClickTask, id } = props;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(generatePath(RoutesPath.Edit, { id }));
  };

  return (
    <div className="bg-white rounded p-3 hover:bg-red-50">
      <p
        className=" hover:cursor-pointer"
        onClick={() => onClickTask && onClickTask(id, name, status)}
      >
        Наименование задачи:
      </p>
      <p className="font-bold">{name}</p>
      <p className="font-bold">Статус</p>
      <p>{status}</p>
      <Button
        color={'pink'}
        buttonText="Реактировать"
        onClick={handleButtonClick}
      />
    </div>
  );
};
