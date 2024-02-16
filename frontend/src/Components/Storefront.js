import React from 'react'
import NavigationBar from './Navbar';

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
      </Container>
</div>
  )
}

export default storeFront