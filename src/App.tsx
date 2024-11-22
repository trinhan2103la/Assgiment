// src/App.tsx
import React from 'react';
import ProductList from './components/ProductList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center p-4 text-blue-600">
        Product List
      </h1>
      <ProductList />
    </div>
  );
};

export default App;
