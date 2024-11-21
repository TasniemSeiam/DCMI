import { useParams } from "react-router-dom";
import ProductDetailsCard from "../../components/ProductDetails";
import { useState, useEffect } from "react";
import style from "./style.module.css";
import { RapidTestProductsInfo } from "../../data/rapidTestProducts";
import ProductDetailsPage from "../ProductDetailsPage";

const ProductRapidTestDetailsPage = () => {
  return (
    <ProductDetailsPage data={RapidTestProductsInfo} />
  );
}

export default ProductRapidTestDetailsPage;
