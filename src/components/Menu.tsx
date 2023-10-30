import menuLogo from '@/assets/img/menu_logo.svg';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <>
      <div className="menu">
        <NavLink
          to="/"
          className={({ isActive }) =>
            [
              isActive
                ? 'bg-rose-100 text-rose-600 font-bold'
                : 'text-purple-600 font-semibold'
            ].join(' ')
          }
        >
          <img src={menuLogo} className="menu__logo" alt="Vite logo" />
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            [
              isActive
                ? 'bg-rose-100 text-rose-600 font-bold'
                : 'text-purple-600 font-semibold'
            ].join(' ')
          }
        >
          Список
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }) =>
            [
              isActive
                ? 'bg-rose-100 text-rose-600 font-bold'
                : 'text-purple-600 font-semibold'
            ].join(' ')
          }
        >
          Создать
        </NavLink>
      </div>
    </>
  );
}

export default Menu;
