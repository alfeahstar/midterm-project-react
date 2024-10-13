import React, { useState } from 'react';
import '../components/css/addItem.css';
import '../components/css/updateItems.css';

const UpdateItems = ({ items, handleUpdateItem }) => {
  const [itemId, setItemId] = useState('');
  const [fieldToUpdate, setFieldToUpdate] = useState(''); 
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const itemToUpdate = items.find(item => item.id === itemId);

    if (itemToUpdate) {
      let oldValue;

      if (fieldToUpdate === 'quantity') {
        oldValue = itemToUpdate.quantity;
        handleUpdateItem(itemId, 'quantity', parseInt(newValue, 10)); 
      } else if (fieldToUpdate === 'price') {
        oldValue = itemToUpdate.price;
        handleUpdateItem(itemId, 'price', parseFloat(newValue));
      } else {
        setMessageType('error');
        setMessage('Error: Please select a field to update.');
        return;
      }

      setMessageType('success');
      setMessage(`${itemToUpdate.name}'s ${fieldToUpdate} updated from ${oldValue} to ${newValue}`);
    } else {
      setMessageType('error');
      setMessage('Item not found!');
    }

   
    setItemId('');
    setFieldToUpdate('');
    setNewValue('');
  };

  return (
    <div className="update_container">
      <h2>Update Items</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="itemId">Input ID</label>
          <input
            type="text"
            id="itemId"
            value={itemId}
            onChange={(e) => setItemId(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fieldToUpdate">Update Field</label>
          <select
            id="fieldToUpdate"
            value={fieldToUpdate}
            onChange={(e) => setFieldToUpdate(e.target.value)}
            required
          >
            <option value="" disabled>Select Field</option>
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="newValue">New Value</label>
          <input
            type="number"
            id="newValue"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            min="0"
            required
          />
        </div>

        <div className="button-container">
          <button type="submit" className="button">Update Item</button>
        </div>
      </form>

      {message && (
        <div className={`message-box ${messageType}`}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default UpdateItems;
