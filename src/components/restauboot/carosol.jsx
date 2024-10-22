import Carousel from 'react-bootstrap/Carousel';
import "./cstyle.css";


function Comp2() {
  return (
    <Carousel>
      <Carousel.Item>
      <img src={"https://tse2.mm.bing.net/th?id=OIP.TSlvW9nTJxQ89cbQC0lluAHaEK&pid=Api&P=0&h=180"} className='i1'/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     <img src={"https://tse2.mm.bing.net/th?id=OIP.MFDdVwGFR3e0VNItZf2zswHaEO&pid=Api&P=0&h=180"} className="i2"/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={"https://tse3.mm.bing.net/th?id=OIP.roZ7kN3QpzvVftww42kIWQHaC9&pid=Api&P=0&h=180"} className="i3"/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Comp2;