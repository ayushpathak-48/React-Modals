import { useState } from 'react';
import './App.css';
import Modal_1 from './all-modals/Modal_1';

function App() {
  const [isModalopen, setIsModalopen] = useState(false)
  return (
    <div className="App">
      <div className='modal-trigger' onClick={() => { setIsModalopen(!isModalopen) }}>Open Modal</div>
      <Modal_1 isModalopen={isModalopen} setIsModalopen={setIsModalopen} />
    </div>
  );
}

export default App;
