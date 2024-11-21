import React from "react";
import style from "./style.module.css";
const ProductDetailsCard = (props) => {
  return (
    <div className={`${style.card}  border-0 card mb-3`}>
      <div className="row g-0 justify-content-center align-items-center">
        <div className="col-md-4">
          <img
            src={props.imageSrc}
            className="img-fluid rounded-start"
            alt={props.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
