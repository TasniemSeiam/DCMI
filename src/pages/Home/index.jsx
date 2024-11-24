import AboutSection from "../../components/AboutSectionComponents/AboutSection";
import CompanyOverView from "../../components/CompanyOverViewComponent/CompanyOverView";
import ContactUs from "../../components/contactSectionComponent/ContactUsSection";
import { FunFactArea } from "../../components/funFactArea";
import HomeSection from "../../components/HomeSectionComponents/HomeSection";
import NavBar from "../../components/NavBar";
import ProductsCategories from "../../components/CategoriesSectionComponents/ProductsCategoriesSection";
import BlogSection from "../../components/BlogSectionComponents/BlogSection";

const Home = () => {
  return (
    <>
      <NavBar />
      <main id="scroll-container">
        <HomeSection />
        <AboutSection />
        <FunFactArea />
        <ProductsCategories />
        <CompanyOverView />
        <ContactUs />
        <BlogSection />
      </main>
    </>
  );
};

export default Home;
