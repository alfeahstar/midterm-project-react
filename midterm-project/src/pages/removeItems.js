import React, { useState } from 'react';
import '../components/css/removeItems.css';
import '../components/css/addItem.css';

const RemoveItems = ({ items, handleRemoveItem }) => {
  const [itemId, setItemId] = useState(''); 
  const [statusMessage, setStatusMessage] = useState(''); 
  const [statusType, setStatusType] = useState('');

  const handleInputChange = (e) => {
    setItemId(e.target.value); 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    
    const itemToDelete = items.find(item => item.id === itemId); 

    if (itemToDelete) {
      handleRemoveItem(itemId); 
      setStatusType('success'); 
      setStatusMessage(`Item ${itemToDelete.name} has been removed from the inventory.`); 
      setItemId(''); 
    } else {
      setStatusType('error'); 
      setStatusMessage('Item not found!'); 
    }
  };

  return (
    <div className="remove_container">
      <h2>Remove Items</h2>
      <form onSubmit={handleFormSubmit} className="form-container">
        <div className="input-button-group"> 
          <input
            type="text"
            id="item-id"
            name="item-id"
            value={itemId}
            onChange={handleInputChange}
            placeholder="Enter Item ID to Remove"
            required
            className="input-field" 
          />
          <button type="submit" className="button">Remove Item</button>
        </div>
      </form>

      {statusMessage && (
        <div className={`message-box ${statusType}`}>
          <p>{statusMessage}</p>
        </div>
      )}
    </div>
  );
};

export default RemoveItems;
