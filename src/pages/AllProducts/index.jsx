import Products from "../../components/Products";
import {AllProductsInfo} from "../../data/allProductsInfo";

const AllProducts = () => {
  return <Products header4="DCMI" header2="All Products" products={AllProductsInfo} />;
};

export default AllProducts;
