
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from './components/Navbar';
import About from './components/About';
import Rands from './components/Rands';
import Login from './components/Login';
import BookingForm from './components/Booking';
import Footer from './components/Footer';
import RoomCard from './components/RoomCard';
import Hotels from './components/Hotels';
import Homepage from './components/homepage';
import ContactUs from './components/ContactUs';
import Payment from './components/Payment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

<Router>
     
       
        
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/booknow' element={<Hotels />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/pay" element={<Payment />} />


        </Routes>
        
       

    </Router>

      
    </div>
  );
}

export default App;
