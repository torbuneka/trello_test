import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
import '../assets/styles/common.css';

export default function MainLayout() {
  return (
    <>
      <div id="menubar">
        <Menu />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
