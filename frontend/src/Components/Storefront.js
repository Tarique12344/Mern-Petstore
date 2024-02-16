import React from 'react'
import NavigationBar from './Navbar';
import Footer from './Footer';

const storeFront = () => {
  return (
<div>
  <NavigationBar />
  <Container style={{ marginTop: '30px' }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img1.jpg"
              alt="First slide"
              height="80"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img2.jpg"
              alt="Second slide"
              height="80"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img3.jpg"
              alt="Second slide"
              height="80"
            />
          </Carousel.Item>
          {/* Add more Carousel.Item for additional images */}
        </Carousel>
        <Row className="mt-3">
          {[1, 2, 3, 4, 5].map((imageNumber) => (
            <Col key={imageNumber} md={2} className="mb-2">
              <img
                src={`your_image_url_${imageNumber}.jpg`}
                alt={`Image ${imageNumber}`}
                className="img-fluid"
                height="80"
              />
            </Col>
          ))}
        </Row>
        <Row className="mb-3">
          {[6, 7, 8, 9, 10].map((imageNumber) => (
            <Col key={imageNumber} md={2} className="mb-2">
              <img
                src={`your_image_url_${imageNumber}.jpg`}
                alt={`Image ${imageNumber}`}
                className="img-fluid"
                height="80"
              />
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