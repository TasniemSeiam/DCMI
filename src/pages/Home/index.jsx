// import { useState,useEffect } from "react";
import AboutSection from "../../components/AboutSection";
import CompanyOverView from "../../components/CompanyOverView";
import ContactUs from "../../components/ContactUsSection";
import { FunFactArea } from "../../components/funFactArea";
import HomeSection from "../../components/HomeSection";
// import NavBar from "../../components/NavBar";
import ProductsCategories from "../../components/ProductsCtegoriesSection";


const Home = () => {

  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 300);
  // });
  return (
    <>
      <main id="scroll-container" >
        <HomeSection />
        <AboutSection />
        <FunFactArea />
        <ProductsCategories />
        <CompanyOverView />
        <ContactUs/>
      </main>
    </>
  );
};

export default Home;
