import React, { useState } from 'react';
import '../components/css/addItem.css';

const AddItems = ({ handleAddItem, ids }) => {
  const [item, setItem] = useState({
    id: '',
    name: '',
    quantity: '',
    price: '',
    category: '',
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (ids.includes(item.id)) {
      setMessageType('error');
      setMessage('Error: ID already exists. Please choose a unique ID.');
      return;
    }

    if (!item.id || !item.name || !item.category) {
      setMessageType('error');
      setMessage('Error: Please fill in all required fields.');
      return;
    }

    const newItem = {
      ...item,
      id: String(item.id), 
      quantity: item.quantity === '' ? 0 : parseInt(item.quantity, 10),
      price: item.price === '' ? 0.0 : parseFloat(item.price),
    };

    handleAddItem(newItem);  
    setMessageType('success');
    setMessage('Item added successfully!');

    
    setItem({
      id: '',
      name: '',
      quantity: '',
      price: '',
      category: '',
    });
  };

  return (
    <div className="add_item_container">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            name="id"
            value={item.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={item.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={item.quantity}
            onChange={handleChange}
            min="0"
            step="1"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            step="0.01"
            id="price"
            name="price"
            value={item.price}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={item.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Category</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <div className="button-container">
          <button type="submit" className="button">Add Item</button>
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

export default AddItems;
