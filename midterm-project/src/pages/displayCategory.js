import React, { useState } from 'react';
import '../components/css/displayCategory.css';

function DisplayCategory({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  
  const filteredItems = items.filter(item => item.category === selectedCategory);

  return (
    <div className="table-container">
      <h2>Display Items By Category</h2>

      <div className="form-group">
        <label>Select Category</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="" disabled>Select Category</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      {selectedCategory && (
        <p className="selected-category">Category: {selectedCategory}</p> 
      )}

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
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <tr className="table-row" key={item.id}>
                <td className="table-cell">{item.id}</td>
                <td className="table-cell">{item.name}</td>
                <td className="table-cell">{item.quantity}</td>
                <td className="table-cell">₱{item.price.toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr className="table-row">
              <td colSpan="4" className="no-items-cell">
                No items to display for the selected category.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayCategory;
