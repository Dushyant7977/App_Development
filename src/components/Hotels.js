import './Hotels.css';
import CollapsibleExample from './Navbar';
import Footer from './Footer';
import RoomCard from './RoomCard';



function Hotels() {
    return ( 
        <div>
          

            <CollapsibleExample/>
          <div className='roomcard-flex'>

            <RoomCard
          image="https://hi-cdn.t-rp.co.uk/images/hotels/114060/0?width=768&height=500&crop=true&quality=80"
          price="2500"
          title="Grand Horizon"
          text="jbhfg"
         
          rating={4}
        />
            <RoomCard
          image="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-109353-338504.jpg&fm=jpg"
          price="5000"
          title="Blissful Stay"
          
          rating={5}
        />
          </div>
        <div className='roomcard-flex'>

        <RoomCard
          image="https://apochi.com/wp-content/uploads/2019/03/Espinas-Palace-Hotel-2.jpg"
          price="300"
          title="Vista Inn"
         
          rating={3}
        />
        <RoomCard
          image="https://www.hotelscombined.com/rimg/himg/2e/af/b2/leonardo-334587-168873403-840205.jpg?width=1366&height=768&crop=true"
          price="4000"
          title="Luxe Lodge"
         
          rating={5}
        />
        </div>
        <Footer/>
        </div>
     );
}

export default Hotels;