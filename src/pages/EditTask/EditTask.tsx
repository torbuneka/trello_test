import { useParams, useNavigate, generatePath } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from 'src/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema } from '../../types';
import { RoutesPath } from '../../routesPath';
import { useQuery, useQueryClient } from 'react-query';
import { Tasks } from '../../types';

const schema = taskSchema;

export const EditTask = () => {
  const { id } = useParams();

  let allTasks = useQuery<Tasks>('allTasks', {
    staleTime: 2000,
    enabled: true
  }).data;
  const data = allTasks ? allTasks.find(obj => obj.id == id) : undefined;

  console.log('data', data, id);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: data
      ? { id: String(data.id) || id, title: data.title, status: data.status }
      : {
          id: id || '',
          title: '',
          status: 'open'
        }
  });

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<typeof schema> = async newData => {
    if (newData && newData.id) {
      const index = allTasks
        ? allTasks.findIndex(task => task.id == newData.id)
        : -1;

      if (index !== -1) {
        // Новые значения, которые вы хотите установить

        allTasks[index] = { ...newData };

        console.warn('Объект обновлен:', allTasks);
      } else {
        if (!allTasks) {
          allTasks = [];
        }
        allTasks.push(newData);
      }

      await queryClient.setQueryData('allTasks', allTasks);

      navigate(generatePath(RoutesPath.Detail, { id: newData.id }));
    }
  };

  return (
    <form className="block" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <p className="font-bold">Task Id</p>
        <input
          placeholder="Input Id"
          className="h-9 w-full"
          disabled={id ? true : false}
          {...register('id', { required: true })}
        />
        <p className="text-neutral-600">
          {errors.id && <span>This field is required</span>}
        </p>
      </div>
      <div className="mb-5">
        <p className="font-bold">Name</p>
        <input
          placeholder="Input Name"
          className="h-9 w-full"
          {...register('title', { required: true })}
        />
        <p className="text-neutral-600">
          {errors.title && <span>This field is required</span>}
        </p>
      </div>

      <div className="mb-5">
        <p className="font-bold">Status</p>
        <select
          className="h-9 w-full"
          {...register('status', { required: true })}
        >
          <option value="open">Open</option>
          <option value="in progress">In progress</option>
          <option value="closed">Closed</option>
          <option value="canceled">Canceled</option>
        </select>
        <p className="text-neutral-600">
          {errors.status && <span>{errors.status.message}</span>}
        </p>
      </div>

      <Button
        color={'pink'}
        buttonText={'Save'}
        onClick={handleSubmit(onSubmit)}
      />
    </form>
  );
};
