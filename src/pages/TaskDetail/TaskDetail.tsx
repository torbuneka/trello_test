import { useParams } from 'react-router-dom';

export const TaskDetail = () => {
  const { id } = useParams();
  return (
    <>
      <p className="read-the-docs">Detail</p>
      <p>{id}</p>
    </>
  );
};
