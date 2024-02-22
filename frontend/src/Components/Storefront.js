
import React from 'react';
import NavigationBar from './Navbar';
import Footer from './Footer';
import pic from './Carousel1_pics/Playing_1.jpg'



const StoreFront = () => {
  const pictureData = [
    { id: 1, src: './Carousel1_pics/Playing_1.jpg', description: 'Two friends playing' },
    { id: 2, src: './Carousel1_pics/Playing_2.jpg', description: 'Playing in the backyard' },
    { id: 3, src: './Carousel1_pics/Playing_3.jpg', description: 'Cat and Dog frolicking' },
    { id: 4, src: './Carousel1_pics/Playing_4.jpg', description: 'Curious pack of dogs in the park' },
    { id: 5, src: './Carousel1_pics/Playing_5.jpg', description: 'The Family Pet' },
    { id: 6, src: './Adoption_pics/Dog_1_resized.jpg', description: 'Meet Midas. He likes swimming, herding sheep, and technical writing. He\'s not a big fan of the USPS, though' },
    { id: 7, src: './Adoption_pics./Dog_2_resized.jpg', description: 'Say hi to Ace! He\'s a spaz.' },
    { id: 8, src: './Adoption_pics./Dog_3_resized.jpg', description: 'This is Zeus. He is much more gentle than his namesake and is (ironically) scared of lightning.' },
    { id: 9, src: './Adoption_pics./Cat_1_resized.jpg', description: 'Meet Willow. She\'s a gentle soul waiting to meet you' },
    { id: 10, src: './Adoption_pics./Dog_4_resized.jpg', description: 'Here\'s Nero! He won\'t play the fiddle as Rome burns, but He will do a happy dance when you get home from work!' },
    { id: 11, src: './Adoption_pics./Cat_2_resized.jpg', description: 'Smokey is one of our most playful kitties, and will be a welcome addition to any home!' },
    { id: 12, src: './Adoption_pics./Dog_5_resized.jpg', description: 'Clyde is always willing to listen, and makes a fantastic footwarmer as well.' },
    { id: 13, src: './Adoption_pics./Dog_6_resied.jpg', description: 'Say hello to Koda, a friendly, faithful buddy waiting to go home with you!' },
    { id: 14, src: './Adoption_pics./Cat_3_resized.jpg', description: 'Moby has an affinity for sunbeams, boxes, and your lap.' },
    { id: 15, src: './Adoption_pics./Cat_4_resized.jpg', description: 'Toby LOVES the beach. It\'s kind of ridiculous how much he loves the beach. Can you blame him?' },
    { id: 16, src: './Adoption_pics./Dog_7_resized.jpg', description: 'Say howdy to Heidi! She\'s an energetic companion ready to go on all your adventures with you!' },
    { id: 17, src: './Adoption_pics./Dog_8_resized.jpg', description: 'This is Fritz. Yep, it\'s possible to be this cute. We didn\'t believe it either!' },
    { id: 18, src: './Adoption_pics./Dog_9_resized.jpg', description: 'Meet Angus, who is particularly fond of working from home.' },
    { id: 19, src: './Adoption_pics./Cat_5_resized.jpg', description: 'This is Toby, who is playful, outgoing, and friendly.' },
    { id: 20, src: './Adoption_pics./Dog_10_resized', description: 'Pax is a house favorite around here, and is a gentle giant. Not only can you have a new best friend, but you can also leave the doors unlocked at night, \'cause nobody will break in with this beast around!.' },
    { id: 21, src: './Adoption_pics./Dog_11_resized.jpg', description: 'Axel isn\'t our smartest pup, but he\'s likely the most lovable!' },
    { id: 22, src: './Adoption_pics./Cat_6_resized.jpg', description: 'Petunia is surprised you\'ve not stopped in yet!' },
    { id: 23, src: './Adoption_pics./Cat_7_resized.jpg', description: 'Sebastian is good at sleeping, eating, and BREAKDANCING!' },
    { id: 24, src: './Adoption_pics./Dog_12_resized.jpg', description: 'This is Kiki, she\'s into Jazzercize, Quiet Riot, and dog treats' },
    { id: 25, src: './Adoption_pics./Cat_8_resized.jpg', description: 'Say Hello to Sierra the fashion cat.' },
    // Add more picture data as needed
  ]

  return (
    <div>
      <NavigationBar />
      <div className='container'>
        <div className='carousel'>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              {pictureData.map((picture, index) => (
                <div key={picture.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={pic} className="d-block w-100" alt={`Slide ${picture.id}`} />
                  <div className="carousel-caption d-none d-md-block">
                    <p>{picture.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

}

export default StoreFront