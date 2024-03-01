import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ConferenceInfo from './components/ConferenceInfo/ConferenceInfo'
import Speakers from './components/Speakers/Speakers'
import FoodInfo from './components/FoodInfo/FoodInfo'
import LocationInfo from './components/LocationInfo/LocationInfo'
import Activities from './components/Activities/Activities'


function App() {
  return (
    <Router>
        <Routes> 
          <Route exact path="/" element={
            <div className="App">
              <Navbar />
              <ConferenceInfo />
              <Speakers />
            </div> 
          }></Route>        
          <Route exact path="/location-info" element={<LocationInfo />}></Route>
          <Route exact path="/food-info" element={<FoodInfo />}></Route>
          <Route exact path="/activities" element={<Activities />}></Route>
        </Routes>
    </Router>
  );
}
export default App;
