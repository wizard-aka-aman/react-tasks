import React, { useState } from 'react';

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
