import { categoriesTitle } from "../../data/categoriesTitles";
import Category from "../Category";
import HeadersOfPage from "../HeadersOfPage";
import style from "./style.module.css";

const ProductsCategories = () => {
  return (
    <section
      className={` ${style.ProductsCategories} py-5 position-relative container-fluid`}
      id="products"
    >
      <div className="z-3 py-5"  >
        <HeadersOfPage header2="Our Product" header4="DCMI" />
        <div className="row " >
          <div className="card-group justify-content-center">
            {categoriesTitle.map((category, inx) => (
              <div className=" col-md-3 m-2 z-3 " key={inx}>
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
