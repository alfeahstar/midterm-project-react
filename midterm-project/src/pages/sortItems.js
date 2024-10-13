import React, { useState } from 'react';
import '../components/css/sortItems.css';

function SortItems({ items }) {
  const [sortField, setSortField] = useState('quantity'); 
  const [sortOrder, setSortOrder] = useState('ascending'); 

  const handleSortFieldChange = (e) => {
    setSortField(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedItems = [...items].sort((a, b) => {
    const fieldA = a[sortField];
    const fieldB = b[sortField];

    if (sortOrder === 'ascending') {
      return fieldA > fieldB ? 1 : -1;
    } else {
      return fieldA < fieldB ? 1 : -1;
    }
  });

  return (
    <div className="table-container">
      <h2>Sort Items</h2>

      <div className="sort-controls">
  <div className="sort-by-container">
    <label className='sortLabel'>Sort by:</label>
    <select className="sort-dropdown" value={sortField} onChange={handleSortFieldChange}>
      <option value="quantity">Quantity</option>
      <option value="price">Price</option>
    </select>
  </div>

  <div className="order-container">
    <label className='orderLabel'>Order:</label>
    <select className="order-dropdown" value={sortOrder} onChange={handleSortOrderChange}>
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>
  </div>
</div>

      <table className="inventory-table">
        <thead className="table-header">
          <tr className="header-row">
            <th className="table-heading">ID</th>
            <th className="table-heading">Product Name</th>
            <th className="table-heading">Quantity</th>
            <th className="table-heading">Price</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {sortedItems.length > 0 ? (
            sortedItems.map((item) => (
              <tr className="table-row" key={item.id}>
                <td className="table-cell">{item.id}</td>
                <td className="table-cell">{item.name}</td>
                <td className="table-cell">{item.quantity}</td>
                <td className="table-cell">₱{item.price.toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr className="table-row">
              <td colSpan="4" className="no-items-cell">No items to display.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SortItems;
