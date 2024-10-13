import React from 'react';
import '../components/css/displayAll.css';

function DisplayAll({ items }) {
  return (
    <div className="table-container">
      <h2>Display All Items</h2>
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
          {items.length > 0 ? (
            items.map((item) => (
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
                No items to display.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayAll;
