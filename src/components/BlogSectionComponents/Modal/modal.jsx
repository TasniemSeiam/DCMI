import style from "./style.module.css";

// const tags = ["Web Design", "Social Media", "Recent Blog"];


const ModalBlog = ({ id, shortDescription, imgSrc, longDescription, date }) => {
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
              alt={shortDescription}
              className="img-fluid w-100 rounded rounded-5 "
            />
          </div>
          <div
            className={` ${style.modalTop} text-center modal-title pt-5 px-5   `}
            id={`${id}Label`}
          >
            <h5 className={` ${style.modalTitleH5} mx-auto  `}>
              {shortDescription}
            </h5>

            <ul className="blog-meta pt-2">
              <li className="me-3 d-inline-block">
                <span className=" d-inline-block me-2">
                  <i className="fas fa-calendar "></i>
                </span>
                <span className=" d-inline-block">{date}</span>
              </li>
            </ul>
          </div>
          <div className={`${style.modalBody} modal-body  mx-auto `}>
            <p className=" px-4 py-2 ">{longDescription}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ModalBlog;
