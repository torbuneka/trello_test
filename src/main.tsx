import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CreateTask from './pages/CreateTask';
import TaskDetail from './pages/TaskDetail';
import TaskList from './pages/TaskList';
import MainLayout from './pages/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '*',
        element: <div>error</div>
      },
      {
        path: '',
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
