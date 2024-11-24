import  { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogSliderCard from "../BlogSliderCards";
import { blogs } from "../../../data/blogs";
import style from "./style.module.css";
import HeadersOfPage from "../../HeadersOfPage";
import ModalBlog from "../Modal/modal";

const BlogSection = () => {
  const sliderRef = useRef(null); // Reference to control the slider
  const [selectedBlog, setSelectedBlog] = useState(null); // Track selected blog
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

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };
  
 

  return (
    <section
      className={`${style.blog} py-5 overflow-visible position-relative container-fluid`}  
      id="blog"
    >
      <div className="z-3 px-5 py-5 position-relative "
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="300"
      >
        <HeadersOfPage header2="Recent Blog" header4="Get Updates" />

        {/* Slider Controls */}
        <div className={`${style.arrows} d-flex z-3 position-absolute mb-3`}>
          <button
            className="bg-transparent"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <span className="d-inline-block rounded-circle p-2">
              <i className="fas fa-angle-left"></i>
            </span>
          </button>
          <button
            className="bg-transparent"
            onClick={() => sliderRef.current.slickNext()}
          >
            <span className="d-inline-block rounded-circle p-2">
              <i className="fas fa-angle-right"></i>
            </span>
          </button>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {blogs.map((blog, index) => (
            <BlogSliderCard
              key={index}
              imageSrc={blog.img}
              shortDescription={blog.shortDescription}
              longDescription={blog.longDescription}
              date={blog.date}
              onClick={() => handleBlogClick(blog)} // Pass blog data to modal
            />
          ))}
        </Slider>
      </div>

      {/* Modal */}
      
       {( <ModalBlog
          id="staticBackdrop"
          shortDescription={selectedBlog?.shortDescription}
          longDescription={selectedBlog?.longDescription}
          imgSrc={selectedBlog?.img}
          date={selectedBlog?.date}
        />)}
    
    </section>
  );
};

export default BlogSection;
