import { Link } from 'react-router-dom';

export const TaskList = () => {
  return (
    <>
      <div className="list">
        <p>Список задач</p>

        <Link to="/detail/1">
          <p>1 задача</p>
        </Link>
        <Link to="/detail/2">
          <p>2 задача</p>
        </Link>
      </div>
    </>
  );
};