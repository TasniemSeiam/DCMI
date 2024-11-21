import React from "react";
import HeadersOfPage from "../HeadersOfPage";
import style from "./style.module.css";
import CompanyOverViewCard from "../CompanyOverViewCard";

const companyOverViewData = [
  {
    title: "Company Overview",
    description:
      "DCMI is under construction and will be ready at the end of 2023.",
    iconImage: "/images/work/service-icon-1.png",
  },
  {
    title: "Mission",
    description:
      "Growing up as a leading manufacturer in the field of laboratory diagnostics.",
    iconImage: "/images/work/service-icon-2.png",
  },
  {
    title: "Vision",
    description:
      "We are committed to the continuous development of our products and to contribute to the health of people.",
    iconImage: "/images/work/service-icon-3.png",
  },
  {
    title: "Our culture",
    description:
      "It is based on believing in teamwork. The core of our business is what constitutes our identity.",
    iconImage: "/images/work/service-icon-4.png",
  },
];

const CompanyOverView = () => {
  return (
    <section
      className={` ${style.companyOverView} py-5 overflow-visible  position-relative container-fluid`}
      id=""
    >
      <div className="z-3 px-5 py-5  ">
        <HeadersOfPage header2="Company Overview" header4="DCMI" />

        <div class="row ">
          {companyOverViewData.map((data, inx) => (
            <div class="col-lg-6  z-3 p-3" key={inx}>
              <CompanyOverViewCard
                iconImage={data.iconImage}
                title={data.title}
                description={data.description}
              />
            </div>
          ))}
        </div>
      </div>
      {/* start color imgs in background left side slider home */}
      <div className={`${style.sliderBlueShadow} position-absolute`}>
        <img src="/images/shape/service-blue-shadow.png" alt="" />
      </div>
      <div className={`${style.sliderRedShadow} position-absolute`}>
        <img src="/images/shape/service-red-shadow.png" alt="" />
      </div>
      <div className={`${style.sliderYellowShadow} position-absolute `}>
        <img src="/images/shape/service-yellow-shadow.png" alt="" />
      </div>
      {/* end color imgs in background left slide slider home */}
    </section>
  );
};

export default CompanyOverView;
