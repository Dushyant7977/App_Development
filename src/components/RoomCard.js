import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './RoomCard.css';
import { Link } from 'react-router-dom';


const RoomCard = ({ image, price, title, rating, text }) => {
  return (
    <div className='container_roomcard'>

    <Card className="room-card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <div className="price-tag">Rs.{price}/24Hrs</div>
        <Card.Title>{title}</Card.Title>
        <div className="rating">{'★'.repeat(rating)}</div>
       
        <Card.Text>{text}</Card.Text>
        <div className="button-group">
          <Link><Button variant="warning">VIEW DETAIL</Button></Link>  
          <Link to="/pay"><Button variant="dark">BOOK NOW</Button></Link>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
};

export default RoomCard;
