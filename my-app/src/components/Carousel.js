import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

function ImageCarousel() {
  return (
    <Carousel 
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={1000}
    >
      <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/78e89d02375d5222.jpg?q=20" alt="Image 1" />
      </div>
      <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bf42fbdd3d37c8c3.jpg?q=20" alt="Image 2" />
      </div>
      <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0a04dff0a987c2e5.jpg?q=20" alt="Image 3" />
      </div>
      <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20" alt="Image 4" />
      </div>
      <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1aaeb0a6531bef88.jpg?q=20" alt="Image 5" />
      </div>
      <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0a04dff0a987c2e5.jpg?q=20" alt="Image 6" />
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
