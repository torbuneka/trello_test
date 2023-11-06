import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Menu, Loader } from '../../components';
import '../../assets/styles/common.css';

export const MainLayout = () => {
  return (
    <>
      <div id="menubar">
        <Menu />
      </div>
      <div id="detail">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
