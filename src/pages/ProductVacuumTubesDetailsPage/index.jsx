// import { useParams } from "react-router-dom";
// import ProductDetailsCard from "../../components/ProductDetails";
// import { useState, useEffect } from "react";
// import style from "./style.module.css";
// import { RapidTestProductsInfo } from "../../data/rapidTestProducts";
import ProductDetailsPage from "../ProductDetailsPage";
import { VacuumTubesProductsInfo } from "../../data/vacuumTubesProducts";

const ProductVacuumTubesDetailsPage = () => {
  return (
    <ProductDetailsPage data={VacuumTubesProductsInfo} />
  );
}

export default ProductVacuumTubesDetailsPage;
