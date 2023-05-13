import React from 'react';
import { Link } from 'react-router-dom';
import './ParkingSpots.css';

function ParkingSpots() {
  return (
    <div className="container">
      <Link to="/ParkingLotSample">
        <div className="card">
          <h2>Mcdonalds CPU</h2>
          <p></p>
        </div>
      </Link>
      <Link to="/card2">
        <div className="card">
          <h2>Card 2</h2>
          <p>Card2</p>
        </div>
      </Link>
      <Link to="/card3">
        <div className="card">
          <h2>Card 3</h2>
          <p>Card3 </p>
        </div>
      </Link>
      <Link to="/card4">
        <div className="card">
          <h2>Card 4</h2>
          <p>Card4</p>
        </div>
      </Link>
    </div>
  );
}

export default ParkingSpots;
