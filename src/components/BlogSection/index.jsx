import { Link } from "react-router-dom";
import HeadersOfPage from "../HeadersOfPage";
import style from "./style.module.css"
const BlogSection = () => {
  return (
    <section
      className={` ${style.blog} py-5 overflow-visible  position-relative container-fluid`}
      id="blog"
      >
          
      <div className="z-3 px-5 py-5  ">
        <HeadersOfPage header2="Recent Blog" header4="Get Updates" />

              <div class="row "></div>
              
      </div>
    </section>
  );
};

export default BlogSection;
