import React from "react";
import style from "./style.module.css";
const CompanyOverViewCard = ({ iconImage, title, description }) => {
  return (
    <div
      className={`${style.card} h-100  px-5 py-5 text-lg-start text-center card  mb-3`}
    >
      <div className="row g-0 align-items-center justify-content-center ">
        <div
          className={`${style.divImg} col-md-2  d-inline-block position-relative w-lg-100`}
        >
          <img
            src={iconImage}
            className="img-fluid rounded-start position-relative z-3 "
            alt={title}
          />
          <div
            class={`${style.serviceSmallCircle} ${style.serviceCircle} rounded-circle   d-inline-block position-absolute`}
          ></div>
          <div
            class={`${style.serviceLargeCircle} ${style.serviceCircle}  rounded-circle   d-inline-block position-absolute`}
          ></div>
        </div>
        <div className="col-md-10 ">
          <div className={` ${style.cardBody} card-body`}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text text-secondary  ">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverViewCard;
