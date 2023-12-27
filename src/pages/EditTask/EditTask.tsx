import { useParams, useNavigate, generatePath } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from 'src/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema } from '../../types';
import { RoutesPath } from '../../routesPath';

const schema = taskSchema;

export const EditTask = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<typeof schema> = data => {
    if (data && data.id) {
      navigate(generatePath(RoutesPath.Detail, { id: data.id }));
    }
  };

  return (
    <form className="block" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <p className="font-bold">Id задачи</p>
        <input
          className="h-9 w-full"
          defaultValue={id ? String(id) : ''}
          {...register('id', { required: true })}
        />
        <p className="text-neutral-600">
          {errors.id && <span>This field is required</span>}
        </p>
      </div>
      <div className="mb-5">
        <p className="font-bold">Наименование задачи</p>
        <input
          className="h-9 w-full"
          defaultValue={id ? String(id) : ''}
          {...register('title', { required: true })}
        />
        <p className="text-neutral-600">
          {errors.title && <span>This field is required</span>}
        </p>
      </div>

      <div className="mb-5">
        <p className="font-bold">Статус</p>
        <select
          className="h-9 w-full"
          {...register('status', { required: true })}
        >
          <option value="open">open</option>
          <option value="work">work</option>
          <option value="closed">closed</option>
          <option value="canceled">canceled</option>
        </select>
        <p className="text-neutral-600">
          {errors.status && <span>{errors.status.message}</span>}
        </p>
      </div>

      <Button
        color={'pink'}
        buttonText={'Сохранить'}
        onClick={handleSubmit(onSubmit)}
      />
    </form>
  );
};
