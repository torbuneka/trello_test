import '../assets/styles/common.css';

function List() {
  return (
    <>
      <div className="list">
        <p>Список задач</p>
        <a href={`/detail/1`} className="list__item">
          1 задача
        </a>
        <a href={`/detail/2`} className="list__item">
          2 задача
        </a>
      </div>
    </>
  );
}

export default List;
