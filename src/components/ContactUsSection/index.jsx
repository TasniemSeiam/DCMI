import React from "react";
import HeadersOfPage from "../HeadersOfPage";
import style from "./style.module.css";

const contactInfo = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Location",
    data: "No. 136, Metobus Industrial Area, Kafr Elsheikh, Egypt",
  },
  { icon: "fas fa-phone-alt", title: "Phone", data: "+20 1014 770 241" },
  {
    icon: "fas fa-envelope",
    title: "Email",
    data: "info@deltacaremi.com",
  },
];

const ContactUs = () => {
  return (
    <section
      className={` ${style.contactUs} py-5  overflow-hidden position-relative container-fluid`}
      id="contact"
    >
      <div className="z-3 px-5 py-5">
        <HeadersOfPage
          header2="Contact Details Questions Or Inquiries"
          header4="Contact Us"
        />
        <div className="row pt-5">
          <div className="col-12  col-md-6 ">
            <ul>
              {contactInfo.map((contact, inx) => (
                <li
                  key={inx}
                  className={` ${style.contactLi} row align-items-center text-center justify-content-center justify-content-lg-start text-lg-start  mb-3 `}
                >
                  <div
                    className={`${style.contactIcon} col-2 align-items-center justify-content-center d-flex flex-column d-inline-block me-lg-4 align-items-center`}
                  >
                    <span className="   d-inline-block">
                      <i className={contact.icon}></i>
                    </span>
                  </div>
                  <div className="col-10" >
                    <h6>{contact.title}</h6>
                    <p className="text-secondary">{contact.data}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-6">left</div>
          {/*form in left side */}
        </div>
      </div>

      {/* start color imgs in background left side slider home */}
      <div className={`${style.sliderBlueShadow} position-absolute`}>
        <img src="/images/shape/contact-blue.png" alt="" />
      </div>
      <div className={`${style.sliderRedShadow} position-absolute`}>
        <img src="/images/shape/contact-red.png" alt="" />
      </div>
      <div className={`${style.sliderYellowShadow} position-absolute `}>
        <img src="/images/shape/contact-yellow.png" alt="" />
      </div>
      {/* end color imgs in background left slide slider home */}
    </section>
  );
};

export default ContactUs;
