import React from 'react';
import NavigationBar from './Navbar';
import Footer from './Footer';
import logo from './Carousel1_pics/logo.jpg';

const About = () => {
  return (
    <div>
    
      
      <div className="mb-5">
        <div className="container mt-5 pb-5">
          <div className="container mt-5">
          <br></br>
            <h2 className="text-center mb-4 tilt">About Us</h2>

            <div className="row text">
              <div className="col-md-6">
                <h3 className='tilt'>Our History</h3>
                <p>
                  ADEPARTAR was founded in 1974 by Glenn and Daisy Hickinbottom who rescued three chickens, a goat, and a siamese cat named Ed from their commune in Donner Pass, Colorado. They moved to the Cincinnati area, as news of their absconding wouldn't be received until a decade later, according to Samuel Clemens.
                </p>
                <blockquote><i>~If the world comes to an end, I want to be in Cincinnati. Everything comes there ten years later. -Samuel Clemens~</i></blockquote>
                <p>
                  Once they arrived, the goat had been eaten, one of the chickens had been hit by a car, and the cat ran away with the spoon. After that, the Hickinbottoms swore they would help all the little critters find a home where they never had to worry about their tenuous position in the food chain or philandering flatware.
                </p>
              </div>

              <div className="col-md-6">
                <h3 className='tilt'>Our Mission</h3>
                <p>
                  Our mission is to never eat another pet, and to make sure all of our little orphans go to homes where they are loved - just not for their meat.
                </p>
                <p>
                  ADETARPAR vows to never bow to the yoke of capitalism and is run solely on donations. If your business wants to make a <a href='Donation'>donation</a>, We'll feature you in our newsletter!
                </p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6 text">
                <h3 className='tilt'>Our Facilities</h3>
                <p>
                  We maintain a state of the art facility from 1975 that boasts a cutting edge, multi-purpose campus with plenty of concession options in downtown Cincinnati.
                </p>

                <p>
                  Stop by and see us, and maybe even meet your new family member!
                </p>
              </div>

              <div className="col-md-6">
                {/* First picture */}
                <img src='./Our_location/OurLocationToday.jpg' // Replace with the actual path to the image
                  alt="Our Facilities Today"
                  className="img-fluid mb-2 bankpic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default About;
