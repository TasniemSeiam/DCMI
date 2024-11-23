import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogSliderCard from "../BlogSliderCards";
import { blogs } from "../../../data/blogs";
import style from "./style.module.css";
import HeadersOfPage from "../../HeadersOfPage";

const BlogSection = () => {
  const sliderRef = useRef(null); // Reference to control the slider

  // Slick settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className={`${style.blog} py-5 overflow-visible position-relative container-fluid`}
      id="blog"
    >
      <div className="z-3 px-5 py-5 position-relative ">
        <HeadersOfPage header2="Recent Blog" header4="Get Updates" />

        {/* Slider Controls */}
        <div
          className={`${style.arrows}  d-flex z-3 position-absolute  mb-3`}
        >
          <button
            className=" bg-transparent "
            onClick={() => sliderRef.current.slickPrev()} // Go to previous slide
          >
            <span className="d-inline-block rounded-circle p-2" ><i className="fas fa-angle-left"></i></span>
          </button>
          <button
            className=" bg-transparent"
            onClick={() => sliderRef.current.slickNext()} // Go to next slide
          >
            {" "}
            <span className="d-inline-block rounded-circle p-2" ><i className="fas fa-angle-right"></i></span>
            
          </button>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {blogs.map((blog, index) => (
            <BlogSliderCard
              key={index}
              imageSrc={blog.img}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogSection;
