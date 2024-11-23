import React from "react";
import HeadersOfPage from "../../HeadersOfPage";
import style from "./style.module.css";
import ContactForm from "../ContactForm";

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
      <div className="z-3  py-5">
        <HeadersOfPage
          header2="Contact Details Questions Or Inquiries"
          header4="Contact Us"
        />
        <div className="row px-md-5 pt-5">
          <div className="col-12 z-3 col-lg-6 ">
            <ul className="" >
              {contactInfo.map((contact, inx) => (
                <li
                  key={inx}
                  className={` ${style.contactLi} row align-items-center text-center justify-content-center justify-content-md-start text-md-start  mb-3 `}
                >
                  <div
                    className={`${style.contactIcon} mb-2 col-2 align-items-center justify-content-center d-flex flex-column  me-md-4 `}
                  >
                    <span className="   d-inline-block">
                      <i className={contact.icon}></i>
                    </span>
                  </div>
                  <div className="col-10 text-start ">
                    <h6>{contact.title}</h6>
                    <p className="text-secondary">{contact.data}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/*form in left side */}
          <div className="col-12 z-3 col-lg-6">
          <ContactForm/>
          </div>
          {/*form in right side */}
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
