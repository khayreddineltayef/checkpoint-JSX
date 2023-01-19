import React from "react";
const block = {
  url: "https://www.docplanner.com/img/sygnet.png",
  titre: "Making the healthcare experience more human",
  parag:
    "We want patients to find the perfect doctor and book an appointment in the most easy way.The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.",
  para: "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.",
};
const KhayriLt = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "20px",
        marginLeft: "250px",
        justifyItems: "center",
      }}
    >
      <div style={{ marginLeft: "250px" }}>
        <img
          style={{
            marginTop: "25px",
            marginLeft: "250px",
            marginBottom: "25px",
            width: "40px",
            height: "40px",
          }}
          src={block.url}
          alt="logo1"
        ></img>
        <h1
          style={{
            fontFamily: "work sans",
            fontSize: "34px",
            lineHeight: "44px",
            color: "#00b39b",
            marginTop: "25px",
            marginBottom: "25px",
            marginLeft: "-100px",
            height: "44px",
            width: "975px",
            textAlign: "center",
          }}
        >
          {block.titre}
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginRight: "50px",
        }}
      >
        <p
          height="157px"
          width="498px"
          style={{ textAlign: "center", marginRight: "10px" }}
        >
          {block.parag}
        </p>
        <p height="157px" width="498px" style={{ textAlign: "center" }}>
          {block.para}
        </p>
      </div>
    </div>
  );
};

export default KhayriLt;
