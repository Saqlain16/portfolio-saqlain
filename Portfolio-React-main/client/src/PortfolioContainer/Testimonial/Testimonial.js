import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import ScreenHeading from "../../utilities/SubHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Raju from "./Raju.jpeg"
import Gajodhar from "./gajodhar.jpg"
import Pak from "./pak.jpeg"
import "./Testimonial.css"
import { dom } from '@fortawesome/fontawesome-svg-core'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
dom.watch()

const Testimonial = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

const options ={
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:1,
        },
        1000:{
            items:3,
        }
    }
}

  return (
    <div className="testimonial-continer">
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What my client say about me"}
      />
      <section className="testimonial-section fade-in" id={props.id}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel"
            {...options}>
            
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                <p>
                    <i className="fa fa-quote-left" />
                  I patronized Sahil and when He delivered, I honestly fell in
                  love with the project He is a very honest guy and he delivers
                  ontime.
                  <i className="fa fa-quote-right" />
                </p>
                <ul className="stars list-unstyled">
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star-half-alt"/>
                    </li>
                </ul>
              </div>
              <div className="client-info">
                  <img className="testi-img" src={Gajodhar} />
                  <h5>Gajodhar</h5>
                  <p>Whatsapp University</p>
              </div>
            </div>
          </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                <p>
                    <i className="fa fa-quote-left" />
                  I patronized Sahil and when He delivered, I honestly fell in
                  love with the project He is a very honest guy and he delivers
                  ontime.
                  <i className="fa fa-quote-right" />
                </p>
                <ul className="stars list-unstyled">
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star-half-alt"/>
                    </li>
                </ul>
              </div>
              <div className="client-info">
                  <img className="testi-img" src={Raju} />
                  <h5>Raju</h5>
                  <p>ITUS Graduate</p>
              </div>
            </div>
          </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                <p>
                    <i className="fa fa-quote-left" />
                  I patronized Sahil and when He delivered, I honestly fell in
                  love with the project He is a very honest guy and he delivers
                  ontime.
                  <i className="fa fa-quote-right" />
                </p>
                <ul className="stars list-unstyled">
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star-half-alt"/>
                    </li>
                </ul>
              </div>
              <div className="client-info">
                  <img className="testi-img" src={Pak} />
                  <h5>Virat Afridi</h5>
                  <p>Member of PCCI</p>
              </div>
            </div>
          </div>
          </OwlCarousel>
          </div>
        </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path  fill-opacity="1" d="M0,160L60,181.3C120,203,240,245,360,266.7C480,288,600,288,720,266.7C840,245,960,203,1080,181.3C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        
      </section>
      
    </div>
  );
};

export default Testimonial;
