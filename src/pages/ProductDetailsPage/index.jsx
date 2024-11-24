import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./style.module.css";
import ProductsPageNavBar from "../../components/ProductsPageNavBar";
import ProductDetailsCard from "../../components/productDetailsComponents/ProductDetails";

const ProductDetailsPage = ({ data }) => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [modalImage, setModalImage] = useState(""); // State for the modal image

  useEffect(() => {
    // Find the product with the matching id
    const product = data.find((item) => item.id === id);
    setDetails(product);
    if (product) {
      setModalImage(product.imageSrc); // Initialize modal image
    }
  }, [id, data]);

  if (!details) {
    return (
      <div className={`${style.page}`}>
        <ProductsPageNavBar currentPage="Product Details" />
        <p className="fs-3 text-danger d-flex h-100 flex-column text-center justify-content-center align-items-center">
          Product not found...
        </p>
      </div>
    );
  }

  return (
    <section
      className={` ${style.ProductsCategories} p-0  overflow-hidden  container-fluid`}
      id="products"
    >
      <ProductsPageNavBar currentPage="Product Details" />

      {/* Modal for Image */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header  ">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {details.title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={modalImage} 
                className="img-fluid w-100 rounded"
                alt={details.title}
              />
            </div>
            <div className="modal-footer border-0 ">
              <button type="button" className="btn" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <ProductDetailsCard {...details} setModalImage={setModalImage} />
      </div>

      {/* Background Images */}
      <div className={`${style.sliderBlueShadow} position-absolute`}>
        <img src="/images/shape/portfolio-blue-shadow.png" alt="" />
      </div>
      <div className={`${style.sliderRedShadow} position-absolute`}>
        <img src="/images/shape/portfolio-red-shadow.png" alt="" />
      </div>
      <div className={`${style.sliderYellowShadow} position-absolute`}>
        <img src="/images/shape/portfolio-yellow-shadow.png" alt="" />
      </div>
    </section>
  );
};

export default ProductDetailsPage;
