// src/components/ProductList.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { FixedSizeList as List } from 'react-window';
import { Product } from '../config/types';
import { fetchProducts, searchProducts } from '../config/api';
import SearchBar from './SearchBar';
import ProductItem from './ProductItem';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [query, setQuery] = useState('');

  const loadMoreProducts = useCallback(async () => {
    if (query) return; // Không tải thêm nếu đang tìm kiếm
    const newProducts = await fetchProducts(skip, 20);
    if (newProducts.length === 0) setHasMore(false);
    setProducts((prev) => [...prev, ...newProducts]);
    setSkip(skip + 20);
  }, [skip, query]);

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      const results = await searchProducts(searchQuery);
      setProducts(results);
      setHasMore(false);
    } else {
      setProducts([]);
      setSkip(0);
      setHasMore(true);
    }
  };

  useEffect(() => {
    if (!query) loadMoreProducts();
  }, [loadMoreProducts, query]);

  const ProductRow = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => <ProductItem product={products[index]} style={style} />;

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      {products.length > 0 ? (
        <List
          height={530}
          itemCount={products.length}
          itemSize={100}
          width="100"
          className="border border-gray-300 rounded "
        >
          {ProductRow}
        </List>
      ) : (
        <p className="text-center text-gray-600">No products found</p>
      )}
      {hasMore && !query && (
        <button
          className="block w-full p-2 mt-4 text-white bg-blue-500 rounded"
          onClick={loadMoreProducts}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default ProductList;
