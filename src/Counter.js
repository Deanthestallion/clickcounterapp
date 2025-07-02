import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setMessage(newCount >= 10 ? "You've reached the limit!" : '');
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      setMessage('');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Click Counter</h1>
      <p style={styles.count}>{count}</p>
      {message && <p style={styles.message}>{message}</p>}
      <div>
        <button onClick={increment} style={styles.button}>Increase</button>
        <button onClick={decrement} style={styles.button}>Decrease</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  count: {
    fontSize: '3rem',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  message: {
    color: 'red',
    fontWeight: 'bold',
  }
};

export default Counter;
