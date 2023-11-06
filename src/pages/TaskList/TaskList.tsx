import { Link, generatePath } from 'react-router-dom';
import { RoutesPath } from '../../routesPath';

export const TaskList = () => {
  return (
    <>
      <div className="list">
        <p>Список задач</p>

        <Link to={generatePath(RoutesPath.Detail, { id: '1' })}>
          <p>1 задача</p>
        </Link>
        <Link to={generatePath(RoutesPath.Detail, { id: '2' })}>
          <p>2 задача</p>
        </Link>
      </div>
    </>
  );
};
