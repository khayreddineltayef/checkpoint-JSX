import React from "react";
const parablok = [
  {
    url: "https://www.docplanner.com/img/flag.png",
    id: Math.random(),
    title: "Leader in 13 countries",
    soustitle:
      "Poland, Brazil, Mexico, Spain, Italy, Germany, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile",
  },
  {
    url: "https://www.docplanner.com/img/visits.png",
    id: Math.random(),
    title: "13,000,000 appointments",
    soustitle: "booked last month",
  },
];
const parabloko = [
  {
    url: "https://www.docplanner.com/img/doctors.png",
    id: Math.random(),
    title: "85,000,000 patients",
    soustitle: "visit our websites each month",
  },
  {
    url: "https://www.docplanner.com/img/patients.png",
    id: Math.random(),
    title: "190,000 active doctors",
    soustitle: "trust our solutions",
  },
];

const BlockPara = () => {
  return (
    <div style={{ backgroundColor: "#00B39B" }}>
      <div
        style={{
          display: "flex",
          marginTop: "30px",
          marginLeft: "0 px",
          height: "600px",
          width: "1519px",
        }}
      >
        <div
          style={{
            height: "201px",
            width: "498px",
            marginTop: "90px",
            marginRight: "30px",
          }}
        >
          <h1 style={{ color: "#00B50B", fontSize: "34px" }}>
            The world's biggest healthcare platform
          </h1>
          <p>
            We work from 9 offices all over the world, bringing Docplanner Group
            to life in 13 countries.
          </p>
        </div>

        <div>
          <div style={{ display: "flex" }}>
            {parablok.map((el) => (
              <div
                style={{
                  textAlign: "center",
                  height: "250px",
                  width: "228px",
                  backgroundColor: "white",
                  marginRight: "20px",
                  marginTop: "10px",
                }}
                key={el.id}
              >
                <img style={{ marginTop: "20px" }} src={el.url} alt="lll" />
                <h4>{el.title}</h4>
                <p>{el.soustitle}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex" }}>
            {parabloko.map((el) => (
              <div
                style={{
                  textAlign: "center",
                  height: "250px",
                  width: "228px",
                  backgroundColor: "white",
                  marginRight: "20px",
                  marginTop: "10px",
                }}
                key={el.id}
              >
                <img style={{ marginTop: "20px" }} src={el.url} alt="" />
                <h4>{el.title}</h4>
                <p>{el.soustitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockPara;
