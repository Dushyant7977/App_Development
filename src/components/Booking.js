
import React, { useState } from 'react';
import './Booking.css';
import { Link } from 'react-router-dom';
  

const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking details:', formData);
    
  };

  return (
    <div className='container_booking'>
    <form className="booking-form" onSubmit={handleSubmit}>
      <br></br>
        <b className="booking_text">BOOKING</b>
        <br></br><br></br>
      <label>
        Check-In Date:
        <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
      </label>
      <label>
        Check-Out Date:
        <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
      </label>
      <label>
        Guests:
        <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" required />
      </label>
      <br></br>
      <Link to="/booknow"><button type="submit">Book now</button></Link>
    </form>
    </div>
  );
};

export default BookingForm;
