import { Link } from "react-router-dom";
import style from "./style.module.css";

const ProductsPageNavBar = ({ currentPage }) => {
  return (
    <nav className={`${style.nav}`}>
      <div
        className={`${style.navbar} navbar w-100 px-5 py-4  d-flex justify-content-between `}
      >
        <Link className="navbar-brand" to="/">
          <img src="/images/logo/logo-w.png" alt="HIBRO" />
        </Link>
        <div>
          <Link className={`${style.home} text-white z-3 `} to="/">
            <span>Home</span>
          </Link>{" "}
          / <span>{currentPage}</span>
        </div>
      </div>
    </nav>
  );
};

export default ProductsPageNavBar;
