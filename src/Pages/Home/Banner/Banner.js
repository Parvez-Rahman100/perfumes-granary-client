import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import perfume1 from '../../../assets/perfume1.png';
import perfume2 from '../../../assets/perfume2.jpg';
import perfume3 from '../../../assets/perfume3.png';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <div className='container'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={perfume1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-dark'>Jean Marie Farina</h3>
          <p className='text-dark'>Fresh scents, like Davidoff Cool Water, generally rely on aquatic and citrus notes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={perfume2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Pot Pourri</h3>
          <p className='text-dark'>Fresh fragrances usually comprise of citrus, water and green notes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={perfume3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>L'Origan</h3>
          <p className='text-dark'>
          Sweet and flowery scent will belong under this family
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Banner;