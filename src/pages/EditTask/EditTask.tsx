import { useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from 'src/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema } from '../../types';

const schema = taskSchema;

export const EditTask = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    // setError,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  // React.useEffect(() => {
  //   setError('id', {
  //     type: 'manual',
  //     message: 'Dont Forget Your Username Should Be Cool!'
  //   });
  // }, [setError]);

  const onSubmit: SubmitHandler<typeof schema> = data => {
    if (data) {
      for (let key in data) {
        console.log({ ...data }, key);
        // if (data[key] == '') {
        //   console.log('key', key);
        // }
      }
    } else {
      console.log(false);
    }
  };

  console.log('errors', errors);

  return (
    <form className="block" onSubmit={handleSubmit(onSubmit)}>
      {id}
      <div>
        <p className="font-bold">Id задачи</p>
        <input
          defaultValue={id ? String(id) : ''}
          {...register('id', { required: true })}
        />
        <p className="text-neutral-600">
          {errors.id && <span>This field is required</span>}
        </p>
      </div>
      <div>
        <p className="font-bold">Наименование задачи</p>
        <input
          defaultValue={id ? String(id) : ''}
          {...register('title', { required: true })}
        />
        <p className="text-neutral-600">
          {errors.title && <span>This field is required</span>}
        </p>
      </div>

      <div>
        <p className="font-bold">Статус</p>
        <select {...register('status', { required: true })}>
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
