import CollapsibleExample from "./Navbar";
import About from "./About";
import Rands from "./Rands";
import BookingForm from "./Booking";
import Footer from "./Footer";

function Homepage() {
    return ( 
        <div>
             
       <CollapsibleExample/>
       <About/>
       <Rands/>
       <BookingForm/>
       <Footer/>
      
        </div>
     );
}

export default Homepage;