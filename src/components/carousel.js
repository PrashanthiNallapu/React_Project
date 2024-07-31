import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.css';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Educationn.jpg"  
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>EDUCATION BEYOND OBSTACLES</h3>
          <p>  A beacon of learning in urban slums providing equal opportunity for education to every child.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Slide2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>HEALTHCARE WHERE IT BARELY EXISTS</h3>
          <p>Transforming healthcare services to doorsteps.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Slide4.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>DONATE!!!</h3>
          <p>"Giving is not just about making a donation. It's about making a difference."</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
