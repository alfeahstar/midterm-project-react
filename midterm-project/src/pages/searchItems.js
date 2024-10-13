import React, { useState } from 'react';
import '../components/css/searchItems.css'; 

function SearchItems({ items }) {
  const [itemId, setItemId] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!itemId) {
      setError('Please enter an item ID first!'); 
      setFoundItem(null);
      return; 
    }

    const item = items.find(item => item.id === itemId);
    if (item) { 
      setFoundItem(item);
      setError('');
    } else {
      setError('Item not found!');
      setFoundItem(null);
    }
  };

  return (
    <div className="search-container">
      <h2>Search Items</h2>
      <input
        type="text"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
        placeholder="Enter item ID"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>

      {foundItem && (
        <div className="item-details">
          <h3 className='itemLabel'>Item Details:</h3>
          <table className="search-table">
            <thead>
              <tr className="search-header-row">
                <th className="search-header">ID</th>
                <th className="search-header">Name</th>
                <th className="search-header">Quantity</th>
                <th className="search-header">Price</th>
                <th className="search-header">Category</th>
              </tr>
            </thead>
            <tbody>
              <tr className="search-data-row">
                <td className="search-data">{foundItem.id}</td>
                <td className="search-data">{foundItem.name}</td>
                <td className="search-data">{foundItem.quantity}</td>
                <td className="search-data">₱{foundItem.price.toFixed(2)}</td>
                <td className="search-data">{foundItem.category}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {error && <p className="error-message error-box">{error}</p>} 
    </div>
  );
}

export default SearchItems;
