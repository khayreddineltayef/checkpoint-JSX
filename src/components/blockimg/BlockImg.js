import React from "react";
import { Button } from "react-bootstrap";
const blockimgo = [
  {
    url: "https://www.docplanner.com/images/warsaw.png",
    id: Math.random(),
    titl: " Warsaw",
  },
  {
    url: "https://www.docplanner.com/images/barcelona.png",
    id: Math.random(),
    titl: "Barcelona",
  },
  {
    url: "https://www.docplanner.com/images/munich.png",
    id: Math.random(),
    titl: "Munich",
  },
];
const blockimgt = [
  {
    url: "https://www.docplanner.com/images/istanbul.png",
    id: Math.random(),
    titl: "Istanbul",
  },
  {
    url: "https://www.docplanner.com/images/rome.png",
    id: Math.random(),
    titl: "Rome",
  },
  {
    url: "https://www.docplanner.com/images/bologna.png",
    id: Math.random(),
    titl: "Bologne",
  },
];
const blockimgth = [
  {
    url: "https://www.docplanner.com/images/curitiba.png",
    id: Math.random(),
    titl: "Curtiba",
  },
  {
    url: "https://www.docplanner.com/images/rio-janeiro.png",
    id: Math.random(),
    titl: "rio-janeiro",
  },
  {
    url: "https://www.docplanner.com/images/mexico-city.png",
    id: Math.random(),
    titl: "mexico-city",
  },
];

const BlockImg = () => {
  return (
    <div style={{ marginLeft: "250px" }}>
      <div style={{ marginLeft: "300px" }}>
        <h1
          style={{
            fontSize: "30px",
            height: "78px",
            width: "460px",
            textAlign: "center",
            color: "#00B39B",
          }}
        >
          Improve the lives of millions. Change yours forever.
        </h1>
        <p
          style={{
            fontSize: "14px",
            height: "72px",
            width: "460px",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          More than 2600 team mates share our same vision, goals and passion.
          With offices in Warsaw, Barcelona, Munich, Istanbul, Rome, Rio,
          Bologna, Mexico City and Curitiba, our search for great talent never
          stops.
        </p>
      </div>
      <div style={{ display: "flex", marginTop: "50px" }}>
        {blockimgo.map((el) => (
          <div style={{ marginLeft: "20px" }} key={el.id}>
            <img
              style={{
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
              src={el.url}
              alt=""
            />
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                justifyContent: "space-around",
              }}
            >
              <h5>{el.titl}</h5>
              <Button
                style={{ fontSize: "15px", textAlign: "center" }}
                variant="primary"
              >
                SEE ALL OPENINGS
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", marginTop: "50px" }}>
        {blockimgt.map((el) => (
          <div style={{ marginLeft: "20px" }} key={el.id}>
            <img
              style={{
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
              src={el.url}
              alt=""
            />
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                justifyContent: "space-around",
              }}
            >
              <h5>{el.titl}</h5>
              <Button
                style={{ fontSize: "15px", textAlign: "center" }}
                variant="primary"
              >
                SEE ALL OPENINGS
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", marginTop: "50px" }}>
        {blockimgth.map((el) => (
          <div style={{ marginLeft: "20px" }} key={el.id}>
            <img
              style={{
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
              src={el.url}
              alt=""
            />
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                justifyContent: "space-around",
              }}
            >
              <h5>{el.titl}</h5>
              <Button
                style={{ fontSize: "15px", textAlign: "center" }}
                variant="primary"
              >
                SEE ALL OPENINGS
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockImg;
