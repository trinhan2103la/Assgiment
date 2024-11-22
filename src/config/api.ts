/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Product } from './types';

const BASE_URL = 'https://dummyjson.com';

export const fetchProducts = async (
  skip: number,
  limit: number
): Promise<Product[]> => {
  const response = await axios.get(`${BASE_URL}/products`, {
    params: { skip, limit },
  });
  return response.data.products.map((product: any) => ({
    id: product.id,
    title: product.title,
    category: product.category,
    description: product.description,
    price: product.price,
    thumbnail: product.thumbnail,
  }));
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  const response = await axios.get(`${BASE_URL}/products/search`, {
    params: { q: query }, // Sử dụng tìm kiếm toàn văn
  });

  return response.data.products.map((product: any) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    category: product.category,
    price: product.price,
    thumbnail: product.thumbnail,
  }));
};
