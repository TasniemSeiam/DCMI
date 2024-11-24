import { Link } from "react-router-dom";
import style from "./style.module.css";
const tags = ["Web Design", "Social Media", "Recent Blog"];
const social = [
  {
    icon: "fab fa-facebook-f",
    path: "facebook.com",
    backgroundColor: "#1877f2",
  },
  { icon: "fab fa-twitter", path: "twitter.com", backgroundColor: "#1da1f2" },
  {
    icon: "fab fa-linkedin-in",
    path: "linkedin.com",
    backgroundColor: "#0077b5",
  },
  {
    icon: "fab fa-google-plus-g",
    path: "gmail.com",
    backgroundColor: "#405de6",
  },
];

const ModalBlog = ({ id, title, imgSrc, description }) => {
  return (
    <div
      className="modal fade  "
      id={id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby={`${id}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl ">
        <div className="modal-content  p-5">
          <div className="my-2 text-end ">
            <button
              type="button"
              className={`  ${style.btnClose} rounded-circle   `}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span className={` ${style.btnCloseSpan} p-2 rounded-circle `}>
                <i className="fa fa-close" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div
            className={`${style.modalBodyImg} py-2 d-flex justify-content-center align-items-center`}
          >
            <img
              src={imgSrc}
              alt={title}
              className="img-fluid w-100 rounded rounded-5 "
            />
          </div>
          <div
            className={` ${style.modalTop} text-center modal-title pt-5 px-5   `}
            id={`${id}Label`}
          >
            <h5 className={` ${style.modalTitleH5} mx-auto  `}>{title}</h5>

            <ul className="blog-meta pt-2">
              <li className="me-3 d-inline-block">
                <Link className={`${style.link}   d-inline-block`} to="#">
                  <span className=" d-inline-block me-2">
                  <i className="fa-solid fa-folder-open"></i>
                  </span>
                  Web Design
                </Link>
              </li>
              <li className="me-3 d-inline-block">
                <span className=" d-inline-block me-2">
                  <i className="fas fa-calendar "></i>
                </span>
                <span className=" d-inline-block">June, 21, 2022</span>
              </li>
              <li className="me-3 d-inline-block">
                <span className=" d-inline-block me-2">
                  <i className="fas fa-clock "></i>
                </span>
                <span className=" d-inline-block  ">10</span> min
              </li>
            </ul>
          </div>
          <div className={`${style.modalBody} modal-body  mx-auto `}>
            <p className=" px-4 py-2 ">{description}</p>
          </div>
          <div className={`${style.modalFooter}  row `}>
            <ul
              className={`${style.modalFooterUl}  col-sm-6 d-flex justify-content-center align-items-center fw-bold  `}
            >
              <li className="p-2 me-1">Tags: </li>
              {tags.map((tag, i) => (
                <li className="p-2" key={i}>
                  <Link
                    className={`${style.modalFooterUlLiLink} text-dark  `}
                    to={`/`}
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
            <ul
              className={`${style.modalFooterUl} col-sm-6 d-flex justify-content-center align-items-center fw-bold  `}
            >
              <li className="p-2">Share: </li>
              {social.map((icon, i) => (
                <li className="p-2" key={i}>
                  <Link
                    className={`${style.modalFooterUlLiLink} text-dark  `}
                    to={icon.path}
                  >
                    <span
                      className={`${style.spanIcon}`}
                      style={{ color: icon.backgroundColor }}
                    >
                      <i className={icon.icon}></i>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBlog;
