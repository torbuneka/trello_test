import menuLogo from '@/assets/img/menu_logo.svg';
import { NavLink } from 'react-router-dom';
import { RoutesPath } from '../../routesPath';

export const Menu = () => {
  return (
    <>
      <div className="h-28 custom-menu-background p-3 flex items-center gap-3">
        <NavLink
          to={RoutesPath.Main}
          className={({ isActive }) =>
            [
              isActive ? 'menu-text decoration-wavy underline' : 'menu-text'
            ].join(' ')
          }
        >
          <img src={menuLogo} className="h-full w-24" alt="Vite logo" />
        </NavLink>
        <NavLink
          to={RoutesPath.List}
          className={({ isActive }) =>
            [
              isActive ? 'menu-text decoration-wavy underline' : 'menu-text'
            ].join(' ')
          }
        >
          Список
        </NavLink>
        <NavLink
          to={RoutesPath.Create}
          className={({ isActive }) =>
            [
              isActive ? 'menu-text decoration-wavy underline' : 'menu-text'
            ].join(' ')
          }
        >
          Создать
        </NavLink>
      </div>
    </>
  );
};
