import { useParams } from 'react-router-dom';

export const EditTask = () => {
  const { id } = useParams();
  return (
    <>
      <p className="read-the-docs">Edit</p>
      <p>{id}</p>
    </>
  );
};
