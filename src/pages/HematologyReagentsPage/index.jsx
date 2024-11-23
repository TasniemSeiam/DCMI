import Products from "../../components/Products";
import { HematologyReagents } from "../../data/hematologyReagents";


const HematologyReagentsPage = () => {
  return <Products header4=" " header2="Hematology Reagents" products={HematologyReagents} />;
};

export default HematologyReagentsPage;
