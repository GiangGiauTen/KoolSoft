import React from 'react';
import { Carousel } from 'antd';
import './SwiperImage.css';

const images = [
  'slide1.png',
  'slide2.png',
  'slide3.png',
  'slide4.png',
  'slide5.png',
  'slide6.png',
  'slide7.png',
  'slide8.png',
];
function SwiperImage() {
  return (
    <Carousel autoplay customPaging={i => <div className="custom-dot"></div>}>
      {images.map((image, index) => (
        <div key={index} className="slide">
          <img src={`/slides/${image}`} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
}
export default SwiperImage;
