import React from 'react';
import Slider from "react-slick";

function About() {
  let settings = {
    autoplay: true,
    centerPadding: '60px',
    className: 'horizontal-slider',
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
  };
   return (
    <section className="about bg-light">
      {/* <div className="container"> */}
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="text-center" data-aos="fade-up">
              <h1 className="title">who are the brainiacs?</h1>
              <p className="lead">The Brainiacs are not only fun but also very clever and must not be underestimated. The metaverse might be new but The Brainiacs have always existed. Where did they come from? What are they looking for? Did they come to help or did they come to invade mankind? Every question seems to lead to more mysteries. There is more than meets the eye with The Brainiacs. They have a side to them that no one has seen. A side that demands respect and power. What could all this turn into for the Brainiacs? Join us in the Brainiacland as these mysteries are revealed. Build the story with our community through our collaborations, engagements, games, products, and services - this is the start of an IP that will never be forgotten.</p>
            </div>
          </div>
        </div>
      {/* </div> */}
      {/* <img src="assets/img/svg/cloud.svg" alt="" className="obj-1 d-none"/> */}
    </section>
   )
}

export default About;
