import { NavLink } from 'react-router-dom';

function List() {
  return (
    <>
      <div className="list">
        <p>Список задач</p>

        <NavLink to="/detail/1">
          <p>1 задача</p>
        </NavLink>
        <NavLink to="/detail/2">
          <p>2 задача</p>
        </NavLink>
      </div>
    </>
  );
}

export default List;
