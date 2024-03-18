import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

import pic1 from './Carousel1_pics/Playing_1.jpg';
import pic2 from './Carousel1_pics/Playing_2.jpg';
import pic3 from './Carousel1_pics/Playing_3.jpg';
import pic4 from './Carousel1_pics/playing_park.jpg';
import pic6 from './Adoption_pics/Dog_3_resized.jpg';
import pic7 from './Adoption_pics/Dog_2_resized.jpg';
import pic8 from './Adoption_pics/Dog_4_resized.jpg';
import pic9 from './Adoption_pics/Dog_7_resized.jpg';
import pic10 from './Adoption_pics/Dog_5_resized.jpg';
import pic11 from './Adoption_pics/Dog_6_resized.jpg';
import pic12 from './Adoption_pics/Dog_8_resized.jpg';
import pic13 from './Adoption_pics/Dog_9_resized.jpg';
import pic14 from './Adoption_pics/Dog_10_resized.jpg';
import pic15 from './Adoption_pics/Dog_11_resized.jpg';


const Home = () => {
  return (
    <div>
      <div className="my-4"></div>
      <br></br>
      <Container fluid className="mt-2">
        <Row>
          {/* Scrolling Photo Box */}
          <Col md={4} className="mb-3">
            <div className="box photo-box">
            <br></br>
              <Carousel>
              <br></br>
                {/* Your scrolling photos go here */}
                <Carousel.Item>
                <br></br>
                  <img src={pic1} alt="Scrolling Photo 1" className="img-fluid" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={pic2} alt="Scrolling Photo 2" className="img-fluid" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={pic3} alt="Scrolling Photo 3" className="img-fluid three
                  " />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={pic4} alt="Scrolling Photo 4" className="img-fluid four" />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
         

          <Col md={4}>
            <div className="box text-box text-center">
            <h2>Welcome to ADEPARTAR!</h2>
              <p>
                ADEPARTAR started as a pet adoption agency way back when we started. Since then, we've found homes for innumerable animals, giving them a new lease on life and in most cases, saved them from destruction at a local pound. Please see our <a href='Storefront'>storefront</a> page to see what animals are currently up for adoption at our facility. Since we are not in operation for profit, we're able to use all of our funds for the shelter and caring for the animals, instead of hiring celebrities to do horribly annoying and pathos-laden commercials that feel like a form of torture that Torquemada would be proud of. While we do welcome <a href='Donation'>donations</a>, we'd be thrilled if you dropped off a bag of animal feed, volunteered to help out around the shelter, or did the Bob Barker and had your pets spayed or neutered.
              </p>
            </div>
          </Col>

          {/* Static Photo Box */}
          <Col md={4} className="mb-3">
          <br></br>
          <br></br>
            <div className="box photo-box text-right img-large">
              {/* Your static photos go here */}
              <img src={pic6} alt="Static Photo 1" className="img-fluid mb-3 one" />
              <img src={pic7} alt="Static Photo 2" className="img-fluid mb-3 two" />
              <img src={pic8} alt="Static Photo 3" className="img-fluid mb-3 thee" />
              <img src={pic9} alt="Static Photo 4" className="img-fluid mb-3 fur" />
              <img src={pic10} alt="Static Photo 5" className="img-fluid mb-3 five" />
              <img src={pic11} alt="Static Photo 6" className="img-fluid mb-3 six" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-3 img-large">
            <div className="box photo-box text-left">
              <img src={pic12} alt="Static Photo 7" className="img-fluid mb-3 mx-2 seven" />
              <img src={pic13} alt="Static Photo 8" className="img-fluid mb-3 mx-2 eight" />
              <img src={pic14} alt="Static Photo 9" className="img-fluid mb-3 mx-2 nine" />
              
              {/* Add more static photos as needed */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
  }


  export default Home;




