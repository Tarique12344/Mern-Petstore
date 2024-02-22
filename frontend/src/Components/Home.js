import React from 'react'
import NavigationBar from './Navbar';
import Footer from './Footer';
import { Container, Row, Col, Carousel } from 'react-bootstrap';



const Home = () => {
  return (
    <div>
      <NavigationBar />
    <br></br>
      <Container fluid className="mt-5">
        <Row>
          {/* Static Photo Box */}
          <Col md={4}>
            <div className="box photo-box">
              {/* Your static photos go here */}
              <img src="static-photo1.jpg" alt="Static Photo 1" className="img-fluid" />
              <img src="./Carousel1_pics/Playing_4.jpg" alt="Static Photo 2" className="img-fluid" />
              {/* Add more static photos as needed */}
            </div>
          </Col>

          {/* Scrolling Photo Box */}
          <Col md={4}>
            <div className="box photo-box">
              <Carousel>
                {/* Your scrolling photos go here */}
                <Carousel.Item>
                  <img src="./Carousel1_pics/Playing_1.jpg" alt="Scrolling Photo 1" className="img-fluid" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="scrolling-photo2.jpg" alt="Scrolling Photo 2" className="img-fluid" />
                </Carousel.Item>
                {/* Add more scrolling photos as needed */}
              </Carousel>
            </div>
          </Col>
        </Row>

        {/* Text Box */}
        <Row>
          <Col md={4}>
            <div className="box text-box">
              <h2>Welcome to (whatever we're going to call this??)</h2>
              <p>(Whatever we're going to call this??) started as a pet adoption agency way back when we started. Since then, we've found homes for innumerable animals, giving them a new lease on life, and in most cases, saved them from destruction at a local pound. Please see our storefront page to see what animals are currently up for adoption at our facility. Since we are not in operation for profit, we're able to use all of our funds for the shelter and caring for the animals, instead of hiring celebrities to do horribly annoying and pathos laden commercials that feel like a form of torture that Torquemada would be proud of. While we do welcome donations, we'd be thrilled if you dropped off a bag of animal feed, volunteered to help out around the shelter, or Did the Bob Barker and had your pets spayed or neutered. </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Home;