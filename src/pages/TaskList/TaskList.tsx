import { Link, generatePath } from 'react-router-dom';
import { RoutesPath } from '../../routesPath';

export const TaskList = () => {
  return (
    <div className="w-full">
      <p>Список задач</p>
      <Link to={generatePath(RoutesPath.Detail, { id: '1' })} className="block">
        1 задача
      </Link>
      <Link to={generatePath(RoutesPath.Detail, { id: '2' })} className="block">
        2 задача
      </Link>
    </div>
  );
};
