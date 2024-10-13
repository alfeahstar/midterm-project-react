import React from 'react';
import '../components/css/displayAll.css'; 

function DisplayLow({ items }) {
  
  const lowStockItems = items.filter(item => item.quantity <= 5);

  return (
    <div className="table-container">
      <h2>Low Stock Items</h2>
      <table className="inventory-table">
        <thead className="table-header">
          <tr className="header-row">
            <th className="table-heading">ID</th>
            <th className="table-heading">Product Name</th>
            <th className="table-heading">Quantity</th>
            <th className="table-heading">Price</th>
            <th className="table-heading">Category</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {lowStockItems.length > 0 ? (
            lowStockItems.map((item) => (
              <tr className="table-row" key={item.id}>
                <td className="table-cell">{item.id}</td>
                <td className="table-cell">{item.name}</td>
                <td className="table-cell">{item.quantity}</td>
                <td className="table-cell">₱{item.price.toFixed(2)}</td>
                <td className="table-cell">{item.category}</td>
              </tr>
            ))
          ) : (
            <tr className="table-row">
              <td colSpan="5" className="no-items-cell">
                No low stock items to display.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayLow;
