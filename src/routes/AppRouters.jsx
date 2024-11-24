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
import ProductMedicalDeviceDetailsPage from "../pages/ProductMedicalDeviceDetailsPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TopBtn from "../components/TopBtn";
import ProductConsumablesDetailsPage from "../pages/ProductConsumablesDetailsPage";
const AppRouters = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh(); // Reinitialize AOS after route change
  }, []);
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
        <Route
          path="/vacuum-tubes/:id"
          element={<ProductVacuumTubesDetailsPage />}
        />
        <Route
          path="/rapid-test/:id"
          element={<ProductRapidTestDetailsPage />}
        />
        <Route
          path="/consumables/:id"
          element={<ProductConsumablesDetailsPage />}
        />
        <Route
          path="/medical-devices/:id"
          element={<ProductMedicalDeviceDetailsPage />}
        />
        <Route
          path="/hematology-reagents/:id"
          element={<ProductMedicalDeviceDetailsPage />}
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
      <Footer />
      <TopBtn />

    </Router>
  );
};

export default AppRouters;
