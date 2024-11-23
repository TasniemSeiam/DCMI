// import React from 'react'
import { Link } from "react-scroll";

import { Link as LinkTo } from "react-router-dom";
import style from "./style.module.css";

const social = [
  { icon: "fab fa-facebook-f", path: "facebook.com" },
  { icon: "fab fa-twitter", path: "twitter.com" },
  { icon: "fab fa-linkedin-in", path: "linkedin.com" },
  { icon: "fab fa-youtube", path: "youtube.com" },
];

const HomeSection = () => {
  return (
    <section className={`container-fluid ${style.home}  `} style={{height:"100vh"}} id="home">
      <div className="row  ">
        <div className="  col-12 col-sm-6 d-flex flex-column text-center text-lg-start justify-content-center overflow-hidden order-2 order-md-1 position-relative ">
          {/* start color imgs in background left side slider home */}
          <div className={`${style.sliderYellowShadow} position-absolute `}>
            <img src="/images/shape/slider-yellow-shadow.png" alt="" />
          </div>
          <div className={`${style.sliderBlueShadow} position-absolute`}>
            <img src="/images/shape/slider-blue-shadow.png" alt="" />
          </div>
          <div className={`${style.sliderRedShadow} position-absolute`}>
            <img src="/images/shape/slider-red-shadow.png" alt="" />
          </div>
          {/* end color imgs in background left slide slider home */}
          <div
            className={`${style.sliderContentShape} shape  shapeUpDownAnimation position-absolute`}
          >
            <img src="/images/shape/shape1.png" alt="shape" />
          </div>
          <div className="container d-flex flex-column justify-content-center align-items-center align-items-lg-start w-75 py-5 px-2 overflow-hidden z-3 "   >
            <h1 data-aos="fade-right" data-aos-duration="2000" data-aos-delay="800">DCMI</h1>
            <p className=" text-center text-lg-start text-secondary pb-3 " data-aos="fade-right" data-aos-duration="2500" data-aos-delay="200">
              We are a manufacturer of medical devices, rapid test and
              consumables
            </p>
            <div className={` ${style.btns} btns aos-init`} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
              <Link
                to="contact"
                className={`  text-white fw-bold  px-5 py-3 ${style.btn} btn `}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/*end left side */}
        <div
          className={` col-12 col-sm-6 ${style.rightSide} position-relative order-1 order-md-2 `}
        >
          <div
            className={`${style.sliderSocialLink} position-absolute  d-block `}
          >
            <ul className="  pe-2  ">
              {social.map((social, inx) => (
                <li
                  className=" my-3  p-3 rounded d-block text-center  "
                  key={inx}
                >
                  <LinkTo to={social.path} className=" text-white text-center ">
                    <i className={social.icon}></i>
                  </LinkTo>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/*end right side */}
      {/* row */}
    </section>
  );
};

export default HomeSection;
