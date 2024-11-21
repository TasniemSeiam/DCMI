import Products from "../../components/Products";

const AllProductsInfo = [
  {
    id: "1",
    imageSrc: "/images/products/p1.png",
    title: "HCV Rapid Test",
    category: "rapid-test",
    description: "(Hepatitis C Virus Antibody)",
  },
  {
    id: "2",
    imageSrc: "/images/products/p2.png",
    category: "rapid-test",
    title: "HIV 1/2 Rapid Test",
    description: "(Human immunodeficiency virus)",
  },
  {
    id: "3",
    imageSrc: "/images/products/p3.png",
    category: "rapid-test",
    title: "HBsAg Rapid Test",
    description: "(Hepatitis B Surface Antigen)",
  },
  {
    id: "4",
    imageSrc: "/images/products/p4.png",
    category: "rapid-test",
    title: "Hematology Reagents",
    description: "hematology-reagents",
  },
  {
    id: "5",
    imageSrc: "/images/products/p5.png",
    category: "rapid-test",
    title: "Medical Devices",
    description: "medical-devices",
  },
  {
    id: "6",
    imageSrc: "/images/products/p6.png",
    category: "rapid-test",
    title: "Consumables",
    description: "consumables",
  },
  {
    id: "7",
    imageSrc: "/images/products/p7.png",
    category: "rapid-test",
    title: "Consumables",
    description: "consumables",
  },
  {
    id: "8",
    imageSrc: "/images/products/Q1.png",
    category: "rapid-test",
    title: "Consumables",
    description: "consumables",
  },
  {
    id: "9",
    imageSrc: "/images/products/Q2.png",
    category: "rapid-test",
    title: "Consumables",
    description: "consumables",
  },

  {
    id: "10",
    imageSrc: "/images/products/tu01.jpeg",
    title: "VacuMax",
    category: "vacuum-tubes",
    description: "Gel & Clot Activator",
  },
  {
    id: "11",
    imageSrc: "/images/products/tu02.jpeg",
    title: "VacuMax",
    category: "vacuum-tubes",
    description: "No Additive",
  },
  {
    id: "12",
    imageSrc: "/images/products/tu03.jpeg",
    title: "VacuMax",
    category: "vacuum-tubes",
    description: "K3 EDTA",
  },
  {
    id: "13",
    imageSrc: "/images/products/tu04.jpeg",
    title: "VacuMax",
    category: "vacuum-tubes",
    description: "K3 EDTA",
  },
  {
    id: "14",
    imageSrc: "/images/products/tu05.jpeg",
    title: "VacuMax",
    category: "vacuum-tubes",
    description: "K3 EDTA",
  },
  {
    id: "15",
    imageSrc: "/images/products/tu06.jpeg",
    title: "VacuMax",
    category: "vacuum-tubes",
    description: "K3 EDTA",
  },
];

const AllProducts = () => {
  return <Products header4="DCMI" header2="All Products" products={AllProductsInfo} />;
};

export default AllProducts;
