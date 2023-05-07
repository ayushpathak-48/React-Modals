import { useState } from 'react';
import './App.css';
import Modal from './all-modals/Modal 2/Modal';
function App() {
  const [isModalopen, setIsModalopen] = useState(false)
  return (
    <div className="App">
      <div className='modal-trigger' onClick={() => { setIsModalopen(!isModalopen) }}>Open Modal 2</div>
      <Modal isModalopen={isModalopen} setIsModalopen={setIsModalopen} />
    </div>
  );
}
export default App;