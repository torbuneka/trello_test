import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Menu, Loader } from '../..';
import { asyncRequest } from '../../../api';
import { Tasks } from '../../../types';
import { useQuery, useQueryClient } from 'react-query';

export const MainLayout = () => {
  const { data: appState, isLoading } = useQuery<Tasks>('tasks', async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const response = await asyncRequest(apiUrl);
    return response.map(item => ({
      ...item,
      status: 'open'
    }));
  });

  const queryClient = useQueryClient();
  queryClient.setQueryData('allTasks', appState);

  return (
    <>
      <div>
        <Menu />
      </div>
      <div className="p-3">
        {isLoading ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            {isLoading}
            <Outlet />
          </Suspense>
        )}
      </div>
    </>
  );
};
