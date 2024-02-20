
import React from 'react';
import NavigationBar from './Navbar';
import Footer from './Footer';
import { Container, Carousel, Row, Col, Button } from 'react-bootstrap';

const pictureData = [
  { id: 1, src: './Carousel_pics./Playing_1', description: 'Two friends playing' },
  { id: 2, src: './Carousel_pics./Playing_2', description: 'Playing in the backyard' },
  { id: 2, src: './Carousel_pics./Playing_3', description: 'Cat and Dog frolicking' },
  { id: 2, src: './Carousel_pics./Playing_4', description: 'Curious pack of dogs in the park' },
  { id: 2, src: './Carousel_pics./Playing_5', description: 'The Family Pet' },
  // Add more picture data as needed
];

function App() {
  return (
    <div>
      <NavigationBar />
      <Container style={{ marginTop: '30px' }}>
        {/* First Carousel */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pictureData[0].src}
              alt={`Slide ${pictureData[0].id}`}
              height="80"
            />
          </Carousel.Item>
          {/* Add more Carousel.Item for additional images in the first series */}
        </Carousel>

        {/* Two rows of five pictures with short descriptions */}
        <Row className="mt-3">
          {pictureData.slice(0, 5).map((picture) => (
            <Col key={picture.id} md={2} className="mb-2">
              <img
                src={picture.src}
                alt={`Image ${picture.id}`}
                className="img-fluid"
                height="80"
              />
              <p className="mt-2">{picture.description}</p>
            </Col>
          ))}
        </Row>
        <Row className="mb-3">
          {pictureData.slice(5, 10).map((picture) => (
            <Col key={picture.id} md={2} className="mb-2">
              <img
                src={picture.src}
                alt={`Image ${picture.id}`}
                className="img-fluid"
                height="80"
              />
              <p className="mt-2">{picture.description}</p>
            </Col>
          ))}
        </Row>

        {/* Navigation buttons for the second series */}
        <Row className="justify-content-center">
          <Col md={2}>
            <Button variant="dark" size="sm">
              &lt; Previous Series
            </Button>
          </Col>
          <Col md={2}>
            <Button variant="dark" size="sm">
              Next Series &gt;
            </Button>
          </Col>
        </Row>
      </Container>

    <Footer />
</div>
  )
}

export default storeFront