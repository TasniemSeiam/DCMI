import React from "react";
import style from "./style.module.css";
import DownloadButton from "../DownloadBtn";
import ImageComponent from "../ImagesComponent";
const ProductDetailsCard = (props) => {
  return (
    <div className={`${style.card}  border-0 card mb-5`}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="col-6 mb-2">
          <img
            src={props.imageSrc}
            className="img-fluid rounded"
            alt={props.title}
          />
        </div>
        <div className="col-6 row g-0 my-2">
          {props.imgs
            ? props.imgs.map((img, i) => (
                <ImageComponent key={i} imgs={img} titles={props.title} />
              ))
            : ""}
        </div>
        <div className="col-6 ">
          <div className={`${style.cardBody} card-body`}>
            <h5 className={`${style.title} card-title`}>{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <DownloadButton
              pathPdf={props.pathPdf ? props.pathPdf : null}
              namePdf={props.namePdf}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
