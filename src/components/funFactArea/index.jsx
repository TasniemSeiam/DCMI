import React, { useState, useEffect } from "react";
import style from "./style.module.css";

const data = [
  { num: 12, title: "Years of", title2: "Experience" },
  { num: 3, title: "Worldwide", title2: "Clients" },
  { num: 70, title: "Various", title2: "Products" },
];

export const FunFactArea = () => {
  const [counters, setCounters] = useState(data.map(() => 0));

  useEffect(() => {
    const duration = 2000; // Duration of the animation in milliseconds
    const incrementInterval = 50; // Time between increments in milliseconds

    data.forEach((item, index) => {
      const increment = Math.ceil(item.num / (duration / incrementInterval));
      let currentValue = 0;

      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= item.num) {
          currentValue = item.num;
          clearInterval(interval);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = currentValue;
          return newCounters;
        });
      }, incrementInterval);
    });
  }, []);

  return (
    <div
      className={`${style.funFactArea} fun-fact-bg overflow-hidden  py-5 my-5 `} data-aos="fade-up" data-aos-duration="1800"
    >
      <div className="py-5">
        <div className="row justify-content-center align-items-center">
          {data.map((item, i) => (
            <div className="col-sm-4 col-12" key={i}>
              <div
                className={`${style.singleFact} d-flex flex-column flex-lg-row align-items-center justify-content-center mb-3`}
              >
                <div className="me-lg-3">
                  <span
                    className={`${style.themeColor} d-inline-block `}
                  >
                    {i === 1
                      ? `${counters[i]}K`
                      : counters[i]}
                  </span>
                  <span
                    className={`${style.themeColor} ${style.pre} d-inline-block `}
                  >
                    {i === 1
                      ? "+"
                      : " " && i ===2 ? "+":" "}
                  </span>
                </div>
                <p className="text-white mb-0">
                  {item.title} <br /> {item.title2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
