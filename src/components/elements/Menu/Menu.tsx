import menuLogo from '@src/assets/img/menu_logo.svg';
import { NavLink } from 'react-router-dom';
import { RoutesPath } from '../../../routesPath.ts';

export const Menu = () => {
  return (
    <>
      <div className="h-28 bg-menu p-3 flex items-center gap-3">
        <NavLink
          to={RoutesPath.Main}
          className={({ isActive }) =>
            `menu-text${isActive ? ' decoration-wavy underline' : ''}`
          }
        >
          <img src={menuLogo} className="h-full w-24" alt="Vite logo" />
        </NavLink>
        <NavLink
          to={RoutesPath.List}
          className={({ isActive }) =>
            `menu-text${isActive ? ' decoration-wavy underline' : ''}`
          }
        >
          Список
        </NavLink>
        <NavLink
          to={RoutesPath.Create}
          className={({ isActive }) =>
            `menu-text${isActive ? ' decoration-wavy underline' : ''}`
          }
        >
          Создать
        </NavLink>
      </div>
    </>
  );
};
