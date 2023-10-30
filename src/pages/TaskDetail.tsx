import { useParams } from 'react-router-dom';

function TaskDetail() {
  const { id } = useParams();
  return (
    <>
      <p className="read-the-docs">Detail</p>
      <p>{id}</p>
    </>
  );
}

export default TaskDetail;
