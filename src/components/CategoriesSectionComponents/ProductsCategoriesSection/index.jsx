import { categoriesData } from "../../../data/categoriesData";
import Category from "../Category";
import HeadersOfPage from "../../HeadersOfPage";
import style from "./style.module.css";

const ProductsCategories = () => {
  return (
    <section
      className={` ${style.ProductsCategories} py-5 position-relative container-fluid`}
      id="products"
    >
      <div className="z-3 py-5">
        <HeadersOfPage header2="Our Product" header4="DCMI" />
        <div className=" px-4">
          <div className="row justify-content-center px-4 align-content-center g-4 ">
            {categoriesData.map((category, inx) => (
              <div className=" col-sm-6 col-lg-4  z-3 " key={inx}>
                <Category
                  imageSrc={category.imageSrc}
                  title={category.title}
                  pagePath={category.pagePath}
                />
              </div>
            ))}
          </div>
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
    </section>
  );
};

export default ProductsCategories;
