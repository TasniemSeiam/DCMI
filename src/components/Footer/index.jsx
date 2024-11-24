import { Link } from "react-router-dom";
import style from "./style.module.css";
import NewSletterForm from "../NewSletterForm";
import { social } from "../../data/social";


const Footer = () => {
  return (
    <div className="footer-area overflow-hidden py-5 mb-5">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-4  col-lg-5  col-md-6  col-sm-7 col-12">
              <div className={`${style.footerWidget} pb-4`}>
                <div className="foot-logo mb-3">
                  <Link className="" to="/">
                    <img src="/images/logo/logo.png" alt="HIBRO" />
                  </Link>
                </div>
                <div className={`${style.copyRight}`}>
                  <p className="mb-0  text-secondary">
                    All right reserved &copy;
                    <Link
                      to="https://www.deltacaremi.com/"
                      className="ms-1 text-black fw-bold "
                    >
                      DCMI
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 offset-xl-2 col-lg-3  col-md-5 col-sm-4 col-12 order-2 order-sm-1 order-lg-2 ">
              <div className={`${style.footerWidget} pb-4`}>
                <h5 className="py-2">Follow Us</h5>
                <div className={`${style.sliderSocialLink}  d-block `}>
                  <ul className="d-flex p-0 ">
                    {social.map((social, inx) => (
                      <li className=" d-block text-center pe-1 " key={inx}>
                        <Link to={social.path} className=" text-white  ">
                          <span
                            className=" d-inline-block text-center p-2"
                            style={{ backgroundColor: social.backgroundColor }}
                          >
                            <i className={social.icon}></i>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/*social */}
              </div>
            </div>
            <div className="col-xl-3  col-lg-4  col-md-10  col-sm-12 col-12 order-1 order-sm-2 order-lg-1 ">
              <div className={`${style.footerWidget} pb-4`}>
                <h5 className="py-2">Newsletter</h5>
                <div className="newsletter-form">
                  <NewSletterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
