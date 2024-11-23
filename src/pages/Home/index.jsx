// import { useState,useEffect } from "react";
import AboutSection from "../../components/AboutSection";
import BlogSection from "../../components/BlogSection";
import CompanyOverView from "../../components/CompanyOverView";
import ContactUs from "../../components/ContactUsSection";
import { FunFactArea } from "../../components/funFactArea";
import HomeSection from "../../components/HomeSection";
import NavBar from "../../components/NavBar";
import ProductsCategories from "../../components/ProductsCtegoriesSection";
import TopBtn from "../../components/TopBtn";


const Home = () => {

  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 300);
  // });
  return (
    <>
      <NavBar/>
      <main id="scroll-container" >
        <HomeSection />
        <AboutSection />
        <FunFactArea />
        <ProductsCategories />
        <CompanyOverView />
        <ContactUs />
        <BlogSection/>
      </main>
      <TopBtn/>
    </>
  );
};

export default Home;
