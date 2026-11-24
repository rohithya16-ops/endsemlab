import React from 'react';
import Procduct from './components/Product';

function App() {
  return (
    <div>
      <Procduct name="Laptop" price="75000" />
      <Procduct name="Mobile" price="25000" />
      <Procduct name="Camera" price="50000" />
      <Procduct name="Tablet" price="42000" />
    </div>
  );
}
export default App;