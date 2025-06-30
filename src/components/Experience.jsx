import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>ACHIEVEMENTS</h1>
        {experience.map((data) => {
          return (
            <div
              key={data.Id}
              className="ex-items text-center my-5"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="left">
                <img src={`/assets/${data.imageSrc}`} alt="" />
              </div>
              <div className="right">
                <h3 style={{ color: "yellowgreen" }}>{data.event}</h3>
                <h4>
                  <span style={{ color: "yellowgreen" }}>
                    {data.participationPeriodStart}
                  </span>
                  <span style={{ color: "yellow" }}> | {data.eventLocation}</span>
                </h4>
                {data.highlights.map((item, index) => (
                  <h5 key={index} style={{ color: "yellow" }}>
                    {item}
                  </h5>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
