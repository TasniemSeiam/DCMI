import Products from "../../components/Products";
import { VacuumTubesProductsInfo } from "../../data/vacuumTubesProducts.js";

// const VacuumTubesProductsInfo = [
//   {
//     id: "1",
//     imageSrc: "/images/products/tu01.jpeg",
//     category: "vacuum-tubes",
//     title: "VacuMax",
//     description: "Gel & Clot Activator",
//   },
//   {
//     id: "2",
//     imageSrc: "/images/products/tu02.jpeg",
//     category: "vacuum-tubes",
//     title: "VacuMax",
//     description: "No Additive",
//   },
//   {
//     id: "3",
//     imageSrc: "/images/products/tu03.jpeg",
//     category: "vacuum-tubes",
//     title: "VacuMax",
//     description: "K3 EDTA",
//   },
//   {
//     id: "4",
//     imageSrc: "/images/products/tu04.jpeg",
//     category: "vacuum-tubes",
//     title: "VacuMax",
//     description: "K3 EDTA",
//   },
//   {
//     id: "5",
//     imageSrc: "/images/products/tu05.jpeg",
//     category: "vacuum-tubes",
//     title: "VacuMax",
//     description: "K3 EDTA",
//   },
//   {
//     id: "6",
//     imageSrc: "/images/products/tu06.jpeg",
//     category: "vacuum-tubes",
//     title: "VacuMax",
//     description: "K3 EDTA",
//   },
  
// ];

const VacuumTubesPage = () => {
  return <Products header4=" " header2="Vacuum Tubes" products={VacuumTubesProductsInfo} />;
};

export default VacuumTubesPage;
