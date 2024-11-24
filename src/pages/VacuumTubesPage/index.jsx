import Products from "../../components/Products";
import { VacuumTubesProductsInfo } from "../../data/vacuumTubesProducts.js";


const VacuumTubesPage = () => {
  return <Products header4=" " header2="Vacuum Tubes" products={VacuumTubesProductsInfo} />;
};

export default VacuumTubesPage;
