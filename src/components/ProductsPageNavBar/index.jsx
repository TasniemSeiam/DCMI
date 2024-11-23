import { Link } from "react-router-dom";
import style from "./style.module.css";

const ProductsPageNavBar = ({ currentPage }) => {
  return (
    <div className={`${style.bar} w-100 px-5 py-4  `}>
      <Link className={`${style.home} text-white `} to="/">
        <span >Home</span>
      </Link>{" "}
      / <span>{currentPage}</span>
    </div>
  );
};

export default ProductsPageNavBar;
