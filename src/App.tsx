import { useState } from 'react';
import './assets/styles/common.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app-page">
        new
        <h1>Vite + React + Kate</h1>
        <div className="card">
          <button onClick={() => setCount(count => count + 1)}>
            {' '}
            count is {count}
          </button>

          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
