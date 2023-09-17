import '../assets/styles/common.css';
import menuLogo from '/menu_logo.svg';

function Menu() {
  return (
    <>
      <div className="menu">
        <a href={`/`} className="menu__item">
          <img src={menuLogo} className="menu__logo" alt="Vite logo" />
        </a>
        <a href={`/list`} className="menu__item">
          Список
        </a>

        <a href={`/create`} className="menu__item">
          Создать
        </a>
      </div>
    </>
  );
}

export default Menu;
