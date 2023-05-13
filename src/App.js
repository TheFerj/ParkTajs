import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import ParkingLot from './pages/ParkingLotSample'
import NavBar from './component/NavBaR';
import ParkingSpots from './pages/ParkingSpots';
import About from './pages/About';



function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/ParkingLotSample' element={<ParkingLot/>} />
          <Route path='/Parking' element={<ParkingSpots/>} />
          <Route path='/About' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
