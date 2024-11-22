// src/components/SearchBar.tsx
import React from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="w-full py-2">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 border border-gray-300 rounded"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
