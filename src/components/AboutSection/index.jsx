// import React from 'react'
import style from "./style.module.css";
const AboutSection = () => {
  return (
    <section className={`container-fluid ${style.about}  `} id="about">
      <div className="row  ">
        <div className={` col-12 col-sm-6 ${style.leftSide} order-1 `}></div>
        {/*end left side */}
        <div className="  col-12 col-sm-6 d-flex flex-column  justify-content-center text-center text-lg-start order-2  ">
          <div className={` ${style.rightSide} w-75`}>
            <h3>About Us</h3>
            <h2>DCMI</h2>
            <p className=" text-center text-lg-start text-secondary ">
              Delta Care for medical industries ( DCMI ) is a part of high
              developed- Medical Group called “Delta Care Group“ which aims to
              provide the healthcare sector with the best solutions and
              services.
            </p>
          </div>
        </div>
        {/*end right side */}
      </div>
      {/* row */}
    </section>
  );
};

export default AboutSection;
