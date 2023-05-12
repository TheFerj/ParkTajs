// import React, { useEffect, useState } from "react";

// function ParkingLot() {
//   const [parkingData, setParkingData] = useState({});

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       fetch("http://localhost:8000/ParkingSpaces")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data)
//           setParkingData(data);
//         })
//         .catch((err) => console.log(err.message));
//     }, 5000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const availableSpaces = parkingData.available || [];
//   const occuppiedSpaces = parkingData.occupied || [];

//   return (
//     <div>
//       <h2>Available parking spaces:</h2>
//       <ul>
//         {availableSpaces.map((space) => (
//           <li key={space}>{space}</li>
//         ))}
//       </ul>
//       <h2>Occupied parking spaces:</h2>
//       <ul>
//         {occuppiedSpaces.map((space) => (
//           <li key={space}>{space}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ParkingLot;

// import '@fortawesome/fontawesome-free/css/all.css';

// import React, { useEffect, useState } from "react";
// import "./ParkingLot.css";

// function ParkingLot() {
//   const [parkingData, setParkingData] = useState({});

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       fetch("http://localhost:8000/ParkingSpaces")
//         .then((res) => res.json())
//         .then((data) => {
//           setParkingData(data);
//         })
//         .catch((err) => console.log(err.message));
//     }, 5000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const availableSpaces = parkingData.available || [];
//   const occuppiedSpaces = parkingData.occupied || [];

//   const renderParkingSpaceBox = (space, isAvailable) => {
//     const color = isAvailable ? "green" : "red";
//     return (
//       <div key={space} className="parking-space-box" style={{ backgroundColor: color }}>
//         <i className="icon fas fa-car"></i>
//         <span className="space">{space}</span>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <h2>Available parking spaces:</h2>
//       <div className="parking-spaces-container">
//         {availableSpaces.map((space) => renderParkingSpaceBox(space, true))}
//       </div>
//       <h2>Occupied parking spaces:</h2>
//       <div className="parking-spaces-container">
//         {occuppiedSpaces.map((space) => renderParkingSpaceBox(space, false))}
//       </div>
//     </div>
//   );
// }

// export default ParkingLot;

import '@fortawesome/fontawesome-free/css/all.css';
// import React, { useEffect, useState } from "react";
// import "./ParkingLot.css";

// function ParkingLot() {
//   const [parkingData, setParkingData] = useState({});

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       fetch("http://localhost:8000/ParkingSpaces")
//         .then((res) => res.json())
//         .then((data) => {
//           setParkingData(data);
//         })
//         .catch((err) => console.log(err.message));
//     }, 5000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const availableSpaces = parkingData.available || [];
//   const occuppiedSpaces = parkingData.occupied || [];

//   // Helper function to check if a space is available
//   function isSpaceAvailable(space) {
//     return availableSpaces.includes(space);
//   }

//   return (
//     <div>
      
//       <ul>
//         {availableSpaces.map((space) => (
//           <li key={space}>
//             <i className="icon fas fa-car"></i>
//             <span className={"space " + (isSpaceAvailable(space) ? "green" : "red")}>{space}</span>
//           </li>
//         ))}
//       </ul>
      
//       <ul>
//         {occuppiedSpaces.map((space) => (
//           <li key={space}>
//             <i className="icon fas fa-car"></i>
//             <span className="space occupied">{space}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ParkingLot;
// import React, { useEffect, useState } from "react";
// import "./ParkingLot.css";

// function ParkingLot() {
//   const [parkingData, setParkingData] = useState({});

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       fetch("http://localhost:8000/ParkingSpaces")
//         .then((res) => res.json())
//         .then((data) => {
//           setParkingData(data);
//         })
//         .catch((err) => console.log(err.message));
//     }, 5000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const availableSpaces = parkingData.available || [];
//   const occupiedSpaces = parkingData.occupied || [];

//   function isSpaceAvailable(space) {
//     return availableSpaces.includes(space);
//   }

//   return (
//     <div>
//       <h2>Parking Lot</h2>
//       <div className="parking-lot">
//         {[1, 2, 3, 4, 5, 6].map((space) => (
//           <div
//             key={space}
//             className={"parking-space " + (isSpaceAvailable(space) ? "available" : "occupied")}
//           >
//             {space}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ParkingLot;

// import React, { useEffect, useState } from "react";
// import "./ParkingLot.css";

// function ParkingLot() {
//   const [parkingData, setParkingData] = useState({});

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       fetch("http://localhost:8000/ParkingSpaces")
//         .then((res) => res.json())
//         .then((data) => {
//           setParkingData(data);
//         })
//         .catch((err) => console.log(err.message));
//     }, 5000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const availableSpaces = parkingData.available || [];
//   const occupiedSpaces = parkingData.occupied || [];

//   function isSpaceAvailable(space) {
//     return availableSpaces.includes(space);
//   }

//   const parkingLots = [
//     { space: 1, location: "Level 1, Section A" },
//     { space: 2, location: "Level 1, Section A" },
//     { space: 3, location: "Level 1, Section B" },
//     { space: 4, location: "Level 2, Section A" },
//     { space: 5, location: "Level 2, Section B" },
//     { space: 6, location: "Level 2, Section B" }
//   ];

//   return (
//     <div>
//       <h2>Parking Lot</h2>
//       <div className="parking-lot">
//         {parkingLots.map((lot) => (
//           <div
//             key={lot.space}
//             className={"parking-space " + (isSpaceAvailable(lot.space) ? "available" : "occupied")}
//             title={lot.location}
//           >
//             {lot.space}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ParkingLot;



// import React, { useEffect, useState } from "react";
// import "./ParkingLot.css";

// function ParkingLot() {
//   const [parkingData, setParkingData] = useState({});

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       fetch("http://localhost:8000/ParkingSpaces")
//         .then((res) => res.json())
//         .then((data) => {
//           setParkingData(data);
//         })
//         .catch((err) => console.log(err.message));
//     }, 5000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const availableSpaces = parkingData.available || [];
//   const occupiedSpaces = parkingData.occupied || [];

//   function isSpaceAvailable(space) {
//     return availableSpaces.includes(space);
//   }

//   const leftParkingLots = [
//     { space: 1, location: "Level 1, Section A" },
//     { space: 2, location: "Level 1, Section A" },
//     { space: 3, location: "Level 1, Section B" }
//   ];

//   const rightParkingLots = [
//     { space: 4, location: "Level 2, Section A" },
//     { space: 5, location: "Level 2, Section B" },
//     { space: 6, location: "Level 2, Section B" }
//   ];

//   return (
//     <div>
//       <h2>Parking Lot</h2>
//       <div className="parking-lot">
//         <div className="left-side">
//           {leftParkingLots.map((lot) => (
//             <div
//               key={lot.space}
//               className={"parking-space " + (isSpaceAvailable(lot.space) ? "available" : "occupied")}
//               title={lot.location}
//             >
//               {lot.space}
//             </div>
//           ))}
//         </div>
//         <div className="right-side">
//           {rightParkingLots.map((lot) => (
//             <div
//               key={lot.space}
//               className={"parking-space " + (isSpaceAvailable(lot.space) ? "available" : "occupied")}
//               title={lot.location}
//             >
//               {lot.space}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ParkingLot;


// import React, { useEffect, useState } from "react";
// import "./ParkingLot.css";

// function ParkingLot() {
//   const [parkingData, setParkingData] = useState({});

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       fetch("http://localhost:8000/ParkingSpaces")
//         .then((res) => res.json())
//         .then((data) => {
//           setParkingData(data);
//         })
//         .catch((err) => console.log(err.message));
//     }, 5000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const availableSpaces = parkingData.available || [];
//   const occupiedSpaces = parkingData.occupied || [];

//   function isSpaceAvailable(space) {
//     return availableSpaces.includes(space);
//   }

//   const leftParkingLots = [
//     { space: 1, location: "" },
//     { space: 2, location: "" },
//     { space: 3, location: "" }
//   ];

//   const rightParkingLots = [
//     { space: 4, location: "" },
//     { space: 5, location: "" },
//     { space: 6, location: "" }
//   ];

//   function reserveSpace(space) {
//     const name = window.prompt("Please enter your name:");
//     if (name) {
//       console.log(`Reserved space ${space} for ${name}`);
//       // Here you can add code to actually reserve the space, e.g. by sending
//       // a reservation request to your server.
//     }
//   }

//   return (
//     <div>
//       <h2>Parking Lot</h2>
//       <div className="parking-lot">
//         <div className="left-side">
//           {leftParkingLots.map((lot) => (
//             <div
//               key={lot.space}
//               className={"parking-space " + (isSpaceAvailable(lot.space) ? "available" : "occupied")}
//               title={lot.location}
//               onClick={() => {
//                 if (isSpaceAvailable(lot.space)) {
//                   reserveSpace(lot.space);
//                 }
//               }}
//             >
//               {lot.space}
//             </div>
//           ))}
//         </div>
//         <div className="right-side">
//           {rightParkingLots.map((lot) => (
//             <div
//               key={lot.space}
//               className={"parking-space " + (isSpaceAvailable(lot.space) ? "available" : "occupied")}
//               title={lot.location}
//               onClick={() => {
//                 if (isSpaceAvailable(lot.space)) {
//                   reserveSpace(lot.space);
//                 }
//               }}
//             >
//               {lot.space}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ParkingLot;


import React, { useEffect, useState } from "react";
import "./ParkingLot.css";

function ParkingLot() {
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

  function isSpaceAvailable(space) {
    return availableSpaces.includes(space);
  }

  const leftParkingLots = [
    { space: 1, location: "" },
    { space: 2, location: "" },
    { space: 3, location: "" }
  ];

  const rightParkingLots = [
    { space: 4, location: "" },
    { space: 5, location: "" },
    { space: 6, location: "" }
  ];

  function handleSpaceClick(space, location) {
    if (isSpaceAvailable(space)) {
      // Show reservation form
      const name = window.prompt("Please enter your name:");
      console.log(`Reserving space ${space} at ${location} for ${name}`);
    } else {
      // Display message that space is occupied
      alert(`Space ${space} at ${location} is occupied`);
    }
  }

  return (
    <div>
      <h2>Parking Lot Sample</h2>
      <div className="parking-lot">
        <div className="left-side">
          {leftParkingLots.map((lot) => (
            <div
              key={lot.space}
              className={"parking-space " + (isSpaceAvailable(lot.space) ? "available" : "occupied")}
              title={lot.location}
              onClick={() => handleSpaceClick(lot.space, lot.location)}
            >
              {lot.space}
            </div>
          ))}
        </div>
        <div className="right-side">
          {rightParkingLots.map((lot) => (
            <div
              key={lot.space}
              className={"parking-space " + (isSpaceAvailable(lot.space) ? "available" : "occupied")}
              title={lot.location}
              onClick={() => handleSpaceClick(lot.space, lot.location)}
            >
              {lot.space}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParkingLot;
