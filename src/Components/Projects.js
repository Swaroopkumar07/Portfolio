import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Weatherbank from '../Images/weatherbank.jpg';
import Mark from '../Images/mark.jpg';
import NSS from '../Images/NSS.jpg'


export default function Projects() {
  return (
    <div>
      <p className='skills_heading'>Projects</p>

      <Carousel autoPlay={true} infiniteLoop={true} interval={3000}>
        <div>
          <img src={Weatherbank} alt='none' />
          <a href='https://github.com/Swaroopkumar07/myweatherbank.github.io' target="_blank" rel="noopener noreferrer">
          <p className="legend">Weather bank</p>
          </a>
        </div>
        <div>
          <img src={NSS} alt='none' />
          <a href='https://github.com/Swaroopkumar07/NSSApp' target="_blank" rel="noopener noreferrer">
          <p className="legend">NSS APP</p>
          </a>
        </div>
        <div>
          <img src={Mark} alt='none' />
          <a href='https://github.com/Swaroopkumar07/Mark-45' target="_blank" rel="noopener noreferrer">
          <p className="legend">Mark 45</p>
          </a>
        </div>
      </Carousel>
    </div>
  );
};
