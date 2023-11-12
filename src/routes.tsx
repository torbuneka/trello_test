import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RoutesPath } from './routesPath';

const CreateTask = lazy(() => import('./pages/CreateTask'));
const TaskDetail = lazy(() => import('./pages/TaskDetail'));
const TaskList = lazy(() => import('./pages/TaskList'));
const MainLayout = lazy(() => import('./components/layouts/MainLayout'));

const routes = createBrowserRouter([
  {
    path: RoutesPath.Main,
    element: <MainLayout />,
    children: [
      {
        path: RoutesPath.Error,
        element: <div>error</div>
      },
      {
        path: RoutesPath.Main,
        element: <div>Welcome home</div>
      },
      {
        path: RoutesPath.Create,
        element: <CreateTask />
      },
      {
        path: RoutesPath.Detail,
        element: <TaskDetail />
      },
      {
        path: RoutesPath.List,
        element: <TaskList />
      }
    ]
  }
]);

export default routes;
