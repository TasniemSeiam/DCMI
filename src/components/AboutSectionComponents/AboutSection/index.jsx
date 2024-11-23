// import React from 'react'
import { useState } from "react";
import style from "./style.module.css";

const aboutInfo = [
  "Email",
  "info@deltacaremi.com",
  "Phone",
  "+20 1014 770 241",
];

const AboutSection = () => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // Calculate the relative position of the mouse
    const x = ((clientX - left) / width - 0.5) * 2; // Range: -1 to 1
    const y = ((clientY - top) / height - 0.5) * 2; // Range: -1 to 1

    // Set rotation values
    setRotation({
      rotateX: -y * 15, // Invert for natural tilt
      rotateY: x * 15,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 }); // Reset rotation on mouse leave
  };

  return (
    <section
      className={`container-fluid ${style.about} py-5 overflow-hidden position-relative `}
      id="about"
    >
      <div className=" position-relative  ">
        <div className="">
          <div className="row">
            <div
              className={`  mb-5 mb-sm-1 col-12 col-lg-6 ${style.leftSide} aos-init `}
              data-aos-delay="70"
              data-aos-duration="2000"
              data-aos="fade-right"
            >
              <div className="about-img-wrapper position-relative ">
                <div className={`${style.aboutImgDiv}  position-relative mb-5`}>
                  <div
                    className={`${style.aboutImgOver}  overflow-hidden d-inline-block position-relative`}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      className={`${style.aboutImg}`}
                      src="/images/about/about-img.jpg"
                      alt=""
                      style={{
                        transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
                      }}
                    />
                  </div>
                </div>
                <div
                  className={`${style.aboutColorShapeBg} ${style.themeBg} position-absolute mb-5 aos-init`}
                  data-aos="fade-right"
                  data-aos-delay="10"
                  data-aos-duration="2500"
                ></div>
                <div
                  className={`${style.aboutColorShapeBg} ${style.secondaryBg} position-absolute mb-5`}
                  data-aos="fade-right"
                  data-aos-delay="5"
                  data-aos-duration="2600"
                ></div>
              </div>
            </div>
            {/*end left side */}

            <div className="   col-12 col-lg-6 d-flex flex-column mt-5  py-4  ">
              <div className={` ${style.rightSide}  z-3 `}>
                <div
                  className={`${style.sliderContentShape} shape  shapeUpDownAnimation position-absolute`}
                >
                  <img src="/images/shape/shape2.png" alt="shape" />
                </div>
                <h3>About Us</h3>
                <h2>DCMI</h2>
                <p className=" text-start text-secondary py-2 pe-5 ">
                  Delta Care for medical industries ( DCMI ) is a part of high
                  developed- Medical Group called “Delta Care Group“ which aims
                  to provide the healthcare sector with the best solutions and
                  services.
                </p>

                <ul className=" text-center text-md-start d-flex flex-wrap justify-content-between pe-5 ps-0 ">
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
