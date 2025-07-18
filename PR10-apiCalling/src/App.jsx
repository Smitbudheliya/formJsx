import React from 'react';
import UsersTable from './components/UsersTable.jsx';
import ProductsCard from './components/ProductsCard.jsx';

function App() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Redux Thunk API Example</h2>
      <UsersTable />
      <ProductsCard />
    </div>
  );
}

export default App;
