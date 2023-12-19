import { useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from 'src/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskEdit } from '../../types';

const schema = taskEdit;

export const EditTask = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<typeof schema> = data => {
    if (isValid) {
      console.log({ ...data, id });
    } else {
      console.log(false);
    }
  };

  console.log('errors', errors);

  // Вывод в консоль значения isValid
  console.log('isValid', isValid);

  return (
    <form className="block" onSubmit={handleSubmit(onSubmit)}>
      {id}
      <div>
        <input
          type="number"
          defaultValue={Number(id) || 0}
          {...register('idTask')}
        />
        <p>{errors.idTask && <span>This field is required</span>}</p>

        <p>Наименование задачи</p>
        <input
          defaultValue={id ? String(id) : ''}
          {...register('title', { required: true })}
        />
        <p>{errors.title && <span>This field is required</span>}</p>
      </div>

      <div>
        <p>Статус</p>
        <select {...register('status', { required: true })}>
          <option value="open">open</option>
          <option value="work">work</option>
          <option value="closed">closed</option>
          <option value="canceled">canceled</option>
        </select>
        <p>{errors.status && <span>This field is required</span>}</p>
      </div>

      <Button
        color={'pink'}
        buttonText={'Сохранить'}
        onClick={handleSubmit(onSubmit)}
      />
    </form>
  );
};
