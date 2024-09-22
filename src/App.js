import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">LOGO</div>
          <ul className="nav-links">
            <li>About Us</li>
            <li>Products</li>
            <li>Interiors</li>
            <li>Contact Us</li>
            <li className="search">
              <input type="text" placeholder="search" />
              <button>🔍</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>World Class Dental Equipment's at your doorstep on click of a button, Get yours now at 20% off before they go out of stock.</h1>
          <button className="hero-button">Contact Us</button>
        </div>
      </div>

      {/* Info Cards Section */}
      <section className="info-section">
        <h2>What we do?</h2>
        <p>Trust India Corporation is to be recognized as one of the best providers of dental equipments and interiors across the country, based on the quality of products, our superior service efficiency, viability, integrity, innovation & teamwork.</p>
        <div className="info-cards">
          <div className="card">
            <img src="dental-equipments-image-url" alt="Dental Equipments" />
            <h3>Dental Equipments</h3>
            <button className="card-button">→</button>
          </div>
          <div className="card">
            <img src="interiors-image-url" alt="Interiors" />
            <h3>Interiors</h3>
            <button className="card-button">→</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
