import React from 'react';
import NavigationBar from './Navbar';
import Footer from './Footer';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import pic1 from './Carousel1_pics/Playing_1.jpg';
import pic2 from './Carousel1_pics/Playing_2.jpg';
import pic3 from './Carousel1_pics/Playing_3.jpg';
import pic4 from './Carousel1_pics/Playing_4.jpg';
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
      <NavigationBar />
      <div className="my-4"></div>

      <Container fluid className="mt-2">
        <Row>
          {/* Scrolling Photo Box */}
          <Col md={4}>
            <div className="box photo-box">
              <Carousel>
                {/* Your scrolling photos go here */}
                <Carousel.Item>
                  <img src={pic1} alt="Scrolling Photo 1" className="img-fluid" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={pic2} alt="Scrolling Photo 2" className="img-fluid" />
                </Carousel.Item>
                {/* Add more scrolling photos as needed */}
              </Carousel>
            </div>
          </Col>

          <Col md={4}>
            <div className="box text-box text-center">
              <h2>Welcome to (whatever we're going to call this??)</h2>
              <p>
                (Whatever we're going to call this??) started as a pet adoption agency way back when we started. Since then, we've found homes for innumerable animals, giving them a new lease on life, and in most cases, saved them from destruction at a local pound. Please see our storefront page to see what animals are currently up for adoption at our facility. Since we are not in operation for profit, we're able to use all of our funds for the shelter and caring for the animals, instead of hiring celebrities to do horribly annoying and pathos-laden commercials that feel like a form of torture that Torquemada would be proud of. While we do welcome donations, we'd be thrilled if you dropped off a bag of animal feed, volunteered to help out around the shelter, or Did the Bob Barker and had your pets spayed or neutered.
              </p>
            </div>
          </Col>

          {/* Static Photo Box */}
          <Col md={4}>
            <div className="box photo-box hover-effect">
              {/* Your static photos go here */}
              <img src={pic3} alt="Static Photo 1" className="img-fluid mb-3" style={{ position: 'absolute', top: '510px', left: '300px' }} />
              <img src={pic7} alt="Static Photo 2" className="img-fluid mb-3" style={{ position: 'absolute', top: '190px', right: '80px' }} />
              <img src={pic8}alt="Static Photo 1" className="img-fluid mb-3" style={{ position: 'absolute', bottom: '250px', left: '810px' }} />
              <img src={pic10} alt="Static Photo 2" className="img-fluid mb-3" style={{ position: 'absolute', bottom: '130px', right: '740px' }} />
              <img src={pic11} alt="Static Photo 1" className="img-fluid mb-3" style={{ position: 'absolute', top: '65%', left: '80%', transform: 'translate(-50%, -50%)' }} />
              <img src={pic12} alt="Static Photo 2" className="img-fluid mb-3" style={{ position: 'absolute', bottom: '40%', left: '55%', transform: 'translate(-50%, 50%)' }} />
              <img src={pic13} alt="Static Photo 1" className="img-fluid mb-3" style={{ position: 'absolute', top: '60%', right: '30%', transform: 'translate(50%, -50%)' }} />
              <img src={pic14} alt="Static Photo 2" className="img-fluid mb-3" style={{ position: 'absolute', bottom: '50%', right: '10%', transform: 'translate(50%, 50%)' }} />
              <img src={pic15} alt="Static Photo 1" className="img-fluid mb-3" style={{ position: 'absolute', top: '210px', left: '1500px' }} />
              {/* Add more static photos as needed */}
            </div>
          </Col>
        </Row>
      </Container>
      

      <Footer />
    </div>
  );
};

export default Home;