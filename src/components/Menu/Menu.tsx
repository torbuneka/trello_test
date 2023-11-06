import menuLogo from '@/assets/img/menu_logo.svg';
import { NavLink } from 'react-router-dom';
import { RoutesPath } from '../../routesPath';

export const Menu = () => {
  return (
    <>
      <div className="menu">
        <NavLink
          to={RoutesPath.Main}
          className={({ isActive }) =>
            [
              isActive
                ? 'text-rose-600 font-bold'
                : 'text-purple-600 font-semibold'
            ].join(' ')
          }
        >
          <img src={menuLogo} className="menu__logo" alt="Vite logo" />
        </NavLink>
        <NavLink
          to={RoutesPath.List}
          className={({ isActive }) =>
            [
              isActive
                ? ' text-rose-600 font-bold'
                : 'text-purple-600 font-semibold'
            ].join(' ')
          }
        >
          Список
        </NavLink>
        <NavLink
          to={RoutesPath.Create}
          className={({ isActive }) =>
            [
              isActive
                ? ' text-rose-600 font-bold'
                : 'text-purple-600 font-semibold'
            ].join(' ')
          }
        >
          Создать
        </NavLink>
      </div>
    </>
  );
};
