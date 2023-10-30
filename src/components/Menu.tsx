import menuLogo from '/menu_logo.svg';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <>
      <div className="menu">
        <NavLink to="/">
          <img src={menuLogo} className="menu__logo" alt="Vite logo" />
        </NavLink>
        <NavLink to="/list">Список</NavLink>
        <NavLink to="/create">Создать</NavLink>
      </div>
    </>
  );
}

export default Menu;
