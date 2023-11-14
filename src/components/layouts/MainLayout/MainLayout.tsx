import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Menu, Loader } from '../..';

export const MainLayout = () => {
  return (
    <>
      <div>
        <Menu />
      </div>
      <div className="p-3">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
