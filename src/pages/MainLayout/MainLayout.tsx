import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Menu from '../../components/Menu';
import '../../assets/styles/common.css';

export const MainLayout = () => {
  return (
    <>
      <div id="menubar">
        <Menu />
      </div>
      <div id="detail">
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
