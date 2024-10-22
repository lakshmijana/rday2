import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

class Component1 extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.TSlvW9nTJxQ89cbQC0lluAHaEK&pid=Api&P=0&h=180"
            className="i1"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* Optional caption content here */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.MFDdVwGFR3e0VNItZf2zswHaEO&pid=Api&P=0&h=180"
            className="i2"
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* Optional caption content here */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.roZ7kN3QpzvVftww42kIWQHaC9&pid=Api&P=0&h=180"
            className="i3"
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* Optional caption content here */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Component1;
