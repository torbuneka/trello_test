import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  return (
    <>
      <p className="read-the-docs">Detail</p>
      <p>{id}</p>
    </>
  );
}

export default Detail;
