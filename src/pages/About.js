import React, { useState,useEffect } from 'react';
import './About.css';

function About() {

  const [selectedNumber, setSelectedNumber] = useState(null);
  const [parkingData, setParkingData] = useState({});
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("http://localhost:8000/ParkingSpaces")
        .then((res) => res.json())
        .then((data) => {
          setParkingData(data);
        })
        .catch((err) => console.log(err.message));
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const availableSpaces = parkingData.available || [];
  const occupiedSpaces = parkingData.occupied || [];


  const handleClick = (number) => {
    setSelectedNumber(number);
  };

  const getDivStyle = (number) => {
    if (selectedNumber === number) {
      return { border: '1px solid black', backgroundColor: 'red', opacity: 0.6 };
    } else if (availableSpaces.includes(number)) {
      return { border: '1px solid black', backgroundColor: 'green' };
    } else if (occupiedSpaces.includes(number)) {
      return { border: '1px solid black', backgroundColor: 'red' };
    } else {
      return { border: '1px solid black', backgroundColor: 'white' };
    }
  };

  return (
    <>
      <div>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div
            className="col"
            style={getDivStyle(5)}
            onClick={() => handleClick(5)}
          >
            Parking 5
            
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div
            className="col"
            style={getDivStyle(4)}
            onClick={() => handleClick(4)}
          >
            Parking 4
          </div>
        </div>
        <div className="row" style={{ border: '1px solid black' }}>
          <div
            className="col"
            style={getDivStyle(1)}
            onClick={() => handleClick(1)}
          >
            Parking 1
          </div>
          <div
            className="col"
            style={getDivStyle(2)}
          >
            Parking 2
          </div>
          <div
            className="col"
            style={getDivStyle(3)}
            onClick={() => handleClick(3)}
          >
            Parking 3
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
