import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VenueViewAll from "./components/Event/VenueViewAll";
import NavBar from "./components/common/NavBar";
import ViewVenue from "./components/Event/ViewVenue";
import EditVenue from "./components/Event/EditVenue";
import AddVenue from "./components/Event/AddVenue";
import AddBooking from "./components/Event/AddBooking";
import VenueDetails from "./components/Event/VenueDetails";
import Home from "./components/common/Home";

function App() {
  return (
    <main className='container-fluid'>
       
     <Router>
      <NavBar/>
      <Routes>
    
        <Route exact path='/viewall-venue' element={<VenueViewAll/>}></Route> 
        <Route exact path="/view-venue/:id" element={<ViewVenue/>}></Route>
        <Route exact path="/edit-venue/:id" element={<EditVenue/>}></Route>
        <Route exact path="/add-venue" element={<AddVenue/>}></Route>

        <Route exact path="/add-booking/:id" element={<AddBooking/>}></Route>
        <Route exact path="/search-venue" element={<VenueDetails/>}></Route>

        <Route exact path="/" element={<Home/>}></Route>
       
        
         
      
      </Routes>
     </Router>
     
    </main>
  );
}

export default App;
