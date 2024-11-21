// import React from 'react'
import style from "./style.module.css";
const HomeSection = () => {
  return (
    <section className={`container-fluid ${style.home}  `} id="home">
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
          <div className="container w-75 py-5 px-2 overflow-hidden z-3 ">
            <h1>DCMI</h1>
            <p className=" text-center text-lg-start text-secondary pb-3 ">
              We are a manufacturer of medical devices, rapid test and
              consumables
            </p>
            <div className={` ${style.btns} `}>
              <a
                href="#contact"
                className={`  text-white fw-bold  px-5 py-3 ${style.btn}`}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/*end left side */}
        <div
          className={` col-12 col-sm-6 ${style.rightSide} order-1 order-md-2 `}
        ></div>
      </div>
      {/*end right side */}
      {/* row */}
    </section>
  );
};

export default HomeSection;
