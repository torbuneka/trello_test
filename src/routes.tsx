import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const CreateTask = lazy(() => import('./pages/CreateTask'));
const TaskDetail = lazy(() => import('./pages/TaskDetail'));
const TaskList = lazy(() => import('./pages/TaskList'));
const MainLayout = lazy(() => import('./pages/MainLayout/'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '*',
        element: <div>error</div>
      },
      {
        path: '/',
        element: <div>Welcome home</div>
      },
      {
        path: 'create',
        element: <CreateTask />
      },
      {
        path: 'detail/:id',
        element: <TaskDetail />
      },
      {
        path: 'list',
        element: <TaskList />
      }
    ]
  }
]);

export default routes;
