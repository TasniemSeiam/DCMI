import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./style.module.css";
import ProductsPageNavBar from "../../components/ProductsPageNavBar";
import ProductDetailsCard from "../../components/productDetailsComponents/ProductDetails";
// import { AllProductsInfo } from "../../data/allProductsInfo";

// const AllProductsInfo = [
//   {
//     id: "1",
//     imageSrc: "/images/products/p1.png",
//     category: "rapid-test",
//     title: "HCV Rapid Test",
//     description: "(Hepatitis C Virus Antibody)",
//   },
//   {
//     id: "2",
//     imageSrc: "/images/products/p2.png",
//     category: "rapid-test",
//     title: "HIV 1/2 Rapid Test",
//     description: "(Human immunodeficiency virus)",
//   },
//   {
//     id: "3",
//     imageSrc: "/images/products/p3.png",
//     category: "rapid-test",
//     title: "HBsAg Rapid Test",
//     description: "(Hepatitis B Surface Antigen)",
//   },
//   {
//     id: "4",
//     imageSrc: "/images/products/p4.png",
//     category: "rapid-test",
//     title: "Hematology Reagents",
//     description: "hematology-reagents",
//   },
//   {
//     id: "5",
//     imageSrc: "/images/products/p5.png",
//     category: "rapid-test",
//     title: "Medical Devices",
//     description: "medical-devices",
//   },
//   {
//     id: "6",
//     imageSrc: "/images/products/p6.png",
//     category: "rapid-test",
//     title: "Consumables",
//     description: "consumables",
//   },
//   {
//     id: "7",
//     imageSrc: "/images/products/p7.png",
//     category: "rapid-test",
//     title: "Consumables",
//     description: "consumables",
//   },
//   {
//     id: "8",
//     imageSrc: "/images/products/Q1.png",
//     category: "rapid-test",
//     title: "Consumables",
//     description: "consumables",
//   },
//   {
//     id: "9",
//     imageSrc: "/images/products/Q2.png",
//     category: "rapid-test",
//     title: "Consumables",
//     description: "consumables",
//   },
// ];

const ProductDetailsPage = ({ data }) => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Find the product with the matching id
    const product = data.find((item) => item.id === id);
    setDetails(product);
  }, [id]);

  if (!details) {
    return (
      <div className={`${style.page}`}>
        <ProductsPageNavBar currentPage="Product Details" />

        <p className=" fs-3 text-danger d-flex h-100 flex-column text-center justify-content-center align-items-center ">
          Product not found...
        </p>
      </div>
    );
  }
  return (
    <section
      className={` ${style.ProductsCategories} p-0 overflow-hidden  container-fluid`}
      id="products"
    >
      <ProductsPageNavBar currentPage="Product Details" />

      {/* start modal of image  */}

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
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
                src={details.imageSrc}
                className="img-fluid w-100 rounded"
                alt={details.title}
              />
            </div>
            <div className="modal-footer ">
              <button
                type="button"
                className="btn "
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end modal for image  */}

      <div className=" my-5 ">
        <ProductDetailsCard {...details} />
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

export default ProductDetailsPage;
