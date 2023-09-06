import React, { useState } from 'react';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  // Fungsi untuk melakukan pencarian
  const handleSearch = () => {
    // Lakukan logika pencarian di sini
    // Misalnya, Anda dapat mencari dalam array data contoh
    const data = ['Item 1', 'Item 2', 'Item 3'];
    const results = data.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    
    setSearchResults(results);
  };

  return (
    <div className=" flex items-end justify-end">
      <div className="ml-2">
        <input
          type="text"
          placeholder="Cari sesuatu..."
          className="border border-gray-400 p-2 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="ml-2">
        <button
          className="bg-blue-500 text-white p-2 mr-3 rounded-md"
          onClick={handleSearch}
        >
          Cari
        </button>
      </div>

      <div className="mt-4">
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
