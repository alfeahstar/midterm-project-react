import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { WelcomePageRoute, DashboardLayout } from './pages/welcomePage'; 
import AddItems from './pages/addItems';
import UpdateItems from './pages/updateItems';
import RemoveItems from './pages/removeItems';
import DisplayAll from './pages/displayAll';
import SearchItems from './pages/searchItems';
import SortItems from './pages/sortItems';
import DisplayLow from './pages/displayLow';
import DisplayCategory from './pages/displayCategory';

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const handleUpdateItem = (id, field, newValue) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          [field]: newValue,
        };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePageRoute />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="addItems" element={<AddItems handleAddItem={handleAddItem} ids={items.map(item => item.id)} />} />
            <Route path="updateItems" element={<UpdateItems items={items} handleUpdateItem={handleUpdateItem} />} />
            <Route path="removeItems" element={<RemoveItems items={items} handleRemoveItem={handleRemoveItem} />} />
            <Route path="displayCategory" element={<DisplayCategory items={items} />} />
            <Route path="displayAll" element={<DisplayAll items={items} />} />
            <Route path="searchItems" element={<SearchItems items={items} />} />
            <Route path="sortItems" element={<SortItems items={items} />} />
            <Route path="displayLow" element={<DisplayLow items={items} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
