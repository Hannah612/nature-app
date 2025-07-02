import Carousel from 'react-bootstrap/Carousel';
import TreesAbove from '../assets/trees-above.jpg';
import TreesDark from '../assets/trees-dark.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import CarouselCaptioning from './CarouselCaptioning';

//for the trees page, but you could make this so an image can be passed in, if necessary

function CarouselFade() {
  const [isHovered, setIsHovered] = useState(false); 

  return (
    <Carousel fade className='basis-3/5'>
      <Carousel.Item>
        <img
          className="d-block w-50 m-auto flex"
          src={TreesAbove}
          alt="First slide"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
          <CarouselCaptioning isHovered={isHovered}>                 
              <h3>Tree One</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </CarouselCaptioning>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50 m-auto flex" src={TreesDark} alt="Second Slide" onMouseEnter={() => setIsHovered(true)}  onMouseLeave={() => setIsHovered(false)}/>
        <CarouselCaptioning isHovered={isHovered}>
          <h3>Tree Two</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </CarouselCaptioning>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;