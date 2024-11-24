import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
const BlogSliderCard = (props) => {
  return (
    <div className=" slick-slide z-3  overflow-hidden ">
      <div className={` single-blog mx-3 mb-2  ${style.singleBlog} `}>
        <div className="blog-img rounded-top overflow-hidden ">
          <img
            className={`  ${style.imgs}  w-100 img-fluid `}
            src={props.imageSrc}
            alt={props.title}
          />
        </div>
        <div
          className={`${style.singleBlogContent}  bg-white  py-2 rounded-bottom`}
        >
          <div className={`${style.blogContent}`}>
            <ul className="blog-meta pt-2">
              <li className="me-3 d-inline-block">
                <span className="theme-color d-inline-block me-2">
                  <i className="fas fa-folder"></i>
                </span>
                <span className=" d-inline-block">Web Design</span>
              </li>
              <li className="me-3 d-inline-block">
                <span className="theme-color d-inline-block me-2">
                  <i className="fas fa-user"></i>
                </span>
                <Link className={`${style.link}   d-inline-block`} to="#">
                  Admin
                </Link>
              </li>
              <li className="me-3 d-inline-block">
                <span className="theme-color d-inline-block me-2">
                  <i className="fas fa-comment"></i>
                </span>
                <span className=" d-inline-block">22</span>
              </li>
            </ul>
            <h6 className="px-3 py-2 ">
              <p
                className={`primary-hover text-dark ${style.link} ${style.linkTitle}  `}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={props.onClick} // Open modal on click
              >
                {props.who}
              </p>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSliderCard;
