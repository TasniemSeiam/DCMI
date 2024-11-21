import HeadersOfPage from "../HeadersOfPage";
import ProductsCard from "../ProductsCard";
import style from "./style.module.css";



const Products = ({header2,header4, products }) => {
  return (
    <section
      className={` ${style.ProductsCategories} py-5 overflow-hidden  container-fluid`}
      id="products"
    >
      <div className=" px-5 py-5 ">
        <HeadersOfPage header2={header2} header4={header4} />

        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          {products.map((productInfo) => (
            <div className=" col z-3 " key={productInfo.id}>
              <ProductsCard
                category={productInfo.category}
                id={productInfo.id}
                title={productInfo.title}
                imageSrc={productInfo.imageSrc}
                description={productInfo.description}
              />
            </div>
          ))}
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

export default Products;
