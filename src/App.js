import React, {useState, useEffect} from 'react';
import Logo from './logo.svg';
import styles from './App.module.scss';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className={styles["App"]}>
      <header className={styles["App-header"]}>
+       <img src={Logo} className={styles["App-logo"]} alt="logo" />
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
      </header>
    </div>
  );
}

export default App;