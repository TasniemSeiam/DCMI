import { useState } from "react";
import HeadersOfPage from "../HeadersOfPage";
import ProductsCard from "../ProductsCard";
import ProductsPageNavBar from "../ProductsPageNavBar";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const Products = ({ header2, header4, products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const numPages = Math.ceil(products.length / productsPerPage);
  const nums = [...Array(numPages + 1).keys()].slice(1);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (currentPage !== nums.length) setCurrentPage(currentPage + 1);
  };

  return (
    <section
      className={` ${style.ProductsCategories} p-0 overflow-hidden  container-fluid`}
      id="products"
    >
      <ProductsPageNavBar currentPage={header2} />
      <div className=" px-5 py-5 "  >
        <HeadersOfPage header2={header2} header4={header4} />

        <div className="row row-cols-1 row-cols-md-3 g-4 " >
          {currentProducts.length > 0 ? (
            currentProducts.map((productInfo) => (
              <div className=" col z-3 " key={productInfo.id}>
                <ProductsCard
                  category={productInfo.category}
                  id={productInfo.id}
                  title={productInfo.title}
                  imageSrc={productInfo.imageSrc}
                  shortDescription={productInfo.shortDescription}
                />
              </div>
            ))
          ) : (
            <div className={`${style.notFound} w-100 text-warning`}>
              <h2>Products Not Found</h2>
            </div>
          )}
        </div>
      </div>

      {/* start color imgs in background left side slider home */}
      <div className={`${style.sliderBlueShadow} position-absolute`}>
        <img src="/images/shape/portfolio-blue-shadow.png" alt="" />
      </div>
      <div className={`${style.sliderRedShadow} position-absolute`}>
        <img src="/images/shape/portfolio-red-shadow.png" alt="" />
      </div>
      <div className={`${style.sliderYellowShadow} position-absolute `}>
        <img src="/images/shape/portfolio-yellow-shadow.png" alt="" />
      </div>
      {/* end color imgs in background left slide slider home */}
      {/**pagination */}
      <nav aria-label="Page navigation">
        <ul
          className={`${style.paginate} pagination  justify-content-center align-items-center `}
        >
          <li className="page-item">
            <Link className="page-link" onClick={prevPage} to="#">
              Previous
            </Link>
          </li>
          {nums.map((num, i) => (
            <li
              key={i}
              className={`page-item ${currentPage === num ? style.active : ""}`}
            >
              <Link
                className="page-link"
                to="#"
                onClick={() => handlePageChange(num)}
              >
                {num}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link className="page-link" onClick={nextPage} to="#">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Products;
