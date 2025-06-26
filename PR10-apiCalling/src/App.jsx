import React from 'react';
import UsersTable from './components/UsersTable.jsx';
import ProductsCard from './components/ProductsCard.jsx';

function App() {
  return (
    <div className=" mt-4" style={{ width: '1339.2px', margin: '0 auto' }}>
      <h2 className="text-center mb-4 bg-dark text-white">User & Product Viewer</h2>
      <ProductsCard />
      <hr />

      <UsersTable />
    </div>
  );
}

export default App;
