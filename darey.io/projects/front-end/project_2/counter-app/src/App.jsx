import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount >= 10) {
      setMessage("🎉 You've reached 10!");
    } else {
      setMessage('');
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      if (newCount < 10) {
        setMessage('');
      }
    }
  };

  return (
    <div className="container">
      <h1>React Counter App</h1>
      <h2>Count: {count}</h2>

      <div className="button-container">
        <button onClick={handleIncrement}>➕ Increment</button>
        <button onClick={handleDecrement} disabled={count === 0}>
          ➖ Decrement
        </button>
      </div>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
