import { Link } from "react-router-dom";
import style from "./style.module.css";

const Category = (props) => {
  return (
    <Link to={`/${props.pagePath}`}  >
      <div
        className={`${style.category} d-flex justify-content-center align-items-center h-100 card bg-transparent  border-0 position-relative `}
      >
        <img
          src={props.imageSrc}
          className={`${style.categoryImg}  card-img`}
          alt={props.title}
        />
        <div className={`${style.divOverlay} card-img-overlay `}>
          <h5 className="card-title mt-4 ">{props.title}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Category;
