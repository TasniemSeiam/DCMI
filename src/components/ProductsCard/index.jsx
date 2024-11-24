import { Link } from "react-router-dom";
import style from "./style.module.css";

const ProductsCard = (props) => {
  return (
    <Link to={`/${props.category}/${props.id}`}>
      <div className={`${style.card} h-100 overflow-hidden  card bg-transparent border-0 `}  data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
      data-aos-delay="300"  >
        <img src={props.imageSrc} className="w-100 card-img-top" loading="lazy" alt={props.title} />
        <div className={`${style.cardBody} card-body  `}>
          <h5 className="card-title  ">{ props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductsCard;
