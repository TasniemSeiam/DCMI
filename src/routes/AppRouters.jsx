import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AllProducts from "../pages/AllProducts";
import VacuumTubesPage from "../pages/VacuumTubesPage";
import RapidTestPage from "../pages/RapidTestPage";
import HematologyReagentsPage from "../pages/HematologyReagentsPage";
import MedicalDevicesPage from "../pages/MedicalDevicesPage";
import ConsumablesPage from "../pages/ConsumablesPage";
import ProductRapidTestDetailsPage from "../pages/ProductRapidTestDetailsPage";
import ProductVacuumTubesDetailsPage from "../pages/ProductVacuumTubesDetailsPage";
import Footer from "../components/Footer";
import ProductConsumablestDetailsPage from "../pages/ProductConsumablestDetailsPage";
import ProductMedicalDeviceDetailsPage from "../pages/ProductMedicalDeviceDetailsPage";

const AppRouters = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="all-products" element={<AllProducts />} />
        <Route path="vacuum-tubes" element={<VacuumTubesPage />} />
        <Route path="rapid-test" element={<RapidTestPage />} />
        <Route
          path="hematology-reagents"
          element={<HematologyReagentsPage />}
        />
        <Route path="medical-devices" element={<MedicalDevicesPage />} />
        <Route path="consumables" element={<ConsumablesPage />} />
        <Route path="/vacuum-tubes/:id" element={<ProductVacuumTubesDetailsPage />} />
        <Route path="/rapid-test/:id" element={<ProductRapidTestDetailsPage />} />
        <Route path="/consumables/:id" element={<ProductConsumablestDetailsPage />} />
        <Route path="/medical-devices/:id" element={<ProductMedicalDeviceDetailsPage />} />
        <Route path="/hematology-reagents/:id" element={<ProductMedicalDeviceDetailsPage />} />
        


        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};


export default AppRouters;
