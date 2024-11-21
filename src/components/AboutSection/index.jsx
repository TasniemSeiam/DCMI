// import React from 'react'
import style from "./style.module.css";

const aboutInfo = [
  "Email",
  "info@deltacaremi.com",
  "Phone",
  "+20 1014 770 241",
];

const AboutSection = () => {
  return (
    <section
      className={`container-fluid ${style.about} py-5 overflow-hidden position-relative `}
      id="about"
    >
      <div className=" position-relative pt-3 ">
        <div className="container">
          <div className="row mt-4 ">
            <div className={` col-12 col-sm-6 ${style.leftSide} order-1 `}>
              <div className="about-img-wrapper position-relative">
                <div className="about-img position-relative ">
                  <div className={`${style.aboutImgOver} overflow-hidden d-inline-block position-relative`}>
                    <img
                      className=" tilt"
                      src="/images/about/about-img.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={`${style.aboutColorShapeBg} ${style.themeBg} position-absolute tilt`}></div>
                <div className={`${style.aboutColorShapeBg} ${style.secondaryBg} position-absolute tilt`}></div>
              </div>
            </div>
            {/*end left side */}

            <div className="  col-12 col-sm-6 d-flex flex-column position-relative py-4 justify-content-center text-start order-2  ">
              <div className={` ${style.rightSide}  z-3 `}>
                <div
                  className={`${style.sliderContentShape} shape  shapeUpDownAnimation position-absolute`}
                >
                  <img src="/images/shape/shape2.png" alt="shape" />
                </div>
                <h3>About Us</h3>
                <h2>DCMI</h2>
                <p className=" text-start text-secondary py-2 ">
                  Delta Care for medical industries ( DCMI ) is a part of high
                  developed- Medical Group called “Delta Care Group“ which aims
                  to provide the healthcare sector with the best solutions and
                  services.
                </p>

                <ul className=" text-center text-md-start d-flex flex-wrap justify-content-between ps-0 ">
                  {aboutInfo.map((info, index) => (
                    <li
                      key={index}
                      className={` ${style.aboutInfo} d-inline-block`}
                    >
                      <p className="mb-6">{info}</p>
                    </li>
                  ))}
                </ul>

                <div className="signature mt-20">
                  <img src="/images/about/signature.png" alt="" />
                </div>
              </div>
            </div>
            {/*end right side */}
          </div>
          {/* row */}
        </div>
        {/* container */}
        {/* start color imgs in background left side slider home */}
        <div className={`${style.sliderYellowShadow} position-absolute `}>
          <img src="/images/shape/slider-yellow-shadow.png" alt="" />
        </div>
        <div className={`${style.sliderBlueShadow} position-absolute`}>
          <img src="/images/shape/slider-blue-shadow.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
