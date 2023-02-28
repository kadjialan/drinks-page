import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <header>
        <h1>Drinks DB</h1>
        <div className="search">
          <input type="text" placeholder="search..." />
          <span>
            <i className="fa-solid fa-magnifying-glass" />
          </span>
        </div>
      </header>
      <div className="main">
        <div className="sideBar">
          <h2>Category</h2>

          <h3>champagne</h3>
          <h3>Whisky</h3>
          <h3>Juice</h3>
          <h3>Beer</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
