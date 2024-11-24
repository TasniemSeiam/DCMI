import { useRef, useState, useEffect } from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./style.module.css";
import DownloadButton from "../DownloadBtn";
import ImageComponent from "../ImagesComponent";

const ProductDetailsCard = ({
  imgs,
  title,
  longDescription,
  pathPdf,
  namePdf,
  imageSrc,
  setModalImage,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef(null); // Reference to the slider

  useEffect(() => {
    // Update modal image whenever the main image changes
    if (imgs) {
      setModalImage(imgs[currentImageIndex]);
    } else {
      setModalImage(imageSrc); // Fallback for single image
    }
  }, [currentImageIndex, imgs, imageSrc, setModalImage]);

  // Slider settings
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    initialSlide: currentImageIndex,
    afterChange: (current) => setCurrentImageIndex(current), // Update index when slider changes
  };

  // Handler to update the main image based on thumbnail click
  const handleImageClick = (index) => {
    setCurrentImageIndex(index); // Update the active index
    sliderRef.current.slickGoTo(index); // Navigate the slider to the selected image
  };

  return (
    <div className={`${style.card} border-0 card mb-5 z-2 bg-transparent `}>
      <div
        className="d-flex flex-column justify-content-center align-items-center "
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        {/* Main Image Slider */}
        <div
          className="col-6 mb-2"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          style={{ cursor: "pointer" }}
        >
          {imgs ? (
            <Slider ref={sliderRef} {...sliderSettings}>
              {imgs.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="img-fluid rounded"
                  alt={`${title} ${i}`}
                />
              ))}
            </Slider>
          ) : (
            <img
              src={imageSrc}
              className="img-fluid rounded"
              alt={`${title} `}
            />
          )}
        </div>

        {/* Thumbnails */}
        <div className="col-6 row g-0 my-2">
          {imgs
            ? imgs.map((img, i) => (
                <ImageComponent
                  key={i}
                  imgs={img}
                  titles={title}
                  id={i}
                  currentImageIndex={currentImageIndex}
                  onClick={() => handleImageClick(i)} // Update slider to selected thumbnail
                />
              ))
            : ""}
        </div>

        {/* Product Details */}
        <div className="col-6">
          <div className={`${style.cardBody} card-body`}>
            <h5 className={`${style.title} card-title`}>{title}</h5>
            <p className="card-text">{longDescription}</p>
            <DownloadButton
              pathPdf={pathPdf ? pathPdf : null}
              namePdf={namePdf}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
