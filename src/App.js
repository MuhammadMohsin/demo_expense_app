import React from 'react';
import './App.css';
import Child from './child';
import {TransactionProvider} from './transContext';

function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;
