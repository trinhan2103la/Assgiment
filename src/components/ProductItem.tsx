// src/components/ProductItem.tsx
import React from 'react';
import { Product } from '../config/types';

interface ProductItemProps {
  product: Product;
  style: React.CSSProperties;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, style }) => {
  return (
    <div
      style={style}
      className="flex items-center gap-4 p-4 border-b border-gray-200 bg-white"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="my-2">
        <h4 className="font-semibold">{product.title}</h4>
        <p className="text-gray-600">
          <span className="font-medium text-black">Description:</span>{' '}
          {product.description}
        </p>
        <p className="text-gray-600">
          <span className="font-medium text-black">Category:</span>{' '}
          {product.category}
        </p>
        <p className="text-gray-600">
          <span className="font-medium text-black">Price:</span> $
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
