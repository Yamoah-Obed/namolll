import React, { useState,useEffect } from 'react';
import { testimonials } from '../../components/testimonialist';
import './testi.css'

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const length = testimonials.length;
  
    // Automatically change testimonials every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      }, 5000);
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, [current, length]);
  
    if (!Array.isArray(testimonials) || testimonials.length <= 0) {
      return null;
    }

  return (
    <div className='testimonial-slider'>
      {testimonials.map((testimonial, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <div className='testimonial-content'>
              <p className='testimonial-text'>{testimonial.text}</p>
              <h3 className='testimonial-name'>{testimonial.name}</h3>
              <p className='testimonial-position'>{testimonial.position}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Testimonials;

