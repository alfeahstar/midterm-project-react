import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import '../components/css/welcomePage.css';

function WelcomePage({ handleContinue }) {
  return (
    <div className="welcome-page">
      <span className="welcome">WELCOME!</span>
      <span className="p">
        <br /> to the Inventory Management System.<br /> Click 'Continue' to start managing your inventory<br />
      </span>
      <button onClick={handleContinue} className="conButton">Continue</button>
    </div>
  );
}

export function WelcomePageRoute() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/dashboard'); 
  };

  return <WelcomePage handleContinue={handleContinue} />;
}


export function DashboardLayout() {
  return (
    <div>
      <header className="App-header">
        <h1>INVENTORY MANAGEMENT SYSTEM</h1>
      </header>
      <nav>
        <Link to="addItems" className="link">Add Items</Link>
        <Link to="updateItems" className="link">Update Items</Link>
        <Link to="removeItems" className="link">Remove Items</Link>
        <Link to="displayCategory" className="link">Display Items By Category</Link>
        <Link to="displayAll" className="link">Display All Items</Link>
        <Link to="searchItems" className="link">Search Items</Link>
        <Link to="sortItems" className="link">Sort Items</Link>
        <Link to="displayLow" className="link">Display Low Stock Items</Link>
      </nav>
      <Outlet />
    </div>
  );
}



export default WelcomePage;



