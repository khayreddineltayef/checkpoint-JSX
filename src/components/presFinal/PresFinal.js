import React from "react";
import { Button } from "react-bootstrap";

const PresFinal = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <h1 style={{ marginLeft: "550px", fontSize: "30px" }}>
        Sounds interesting? Join us now!
      </h1>
      <Button
        style={{
          height: "40px",
          width: "210px",
          fontSize: "12px",
          marginLeft: "650px",
        }}
        variant="primary"
      >
        SEE ALL CURRENT OPENINGS
      </Button>
      <div
        height="90px"
        width="1015px"
        style={{
          textAlign: "center",
          marginLeft: "200px",
          marginTop: "90px",
          fontSize: "12px",
        }}
      >
        <p>
          We are leaders in 13 countries:
          <span style={{ color: "blue", cursor: "pointer" }}>
            Poland
          </span> ,{" "}
          <span style={{ color: "blue", cursor: "pointer" }}>Turkey</span>,{" "}
          <span style={{ color: "blue", cursor: "pointer" }}>Spain</span>,{" "}
          <span style={{ color: "blue", cursor: "pointer" }}>Italy</span>,
          <span style={{ color: "blue", cursor: "pointer" }}>Germany</span> ,
          <span style={{ color: "blue", cursor: "pointer" }}>
            Czech Republic
          </span>{" "}
          ,<span style={{ color: "blue", cursor: "pointer" }}>Portugal</span>,{" "}
          <span style={{ color: "blue", cursor: "pointer" }}>Mexico</span>,
          <span style={{ color: "blue", cursor: "pointer" }}>Colombia</span> ,
          <span style={{ color: "blue", cursor: "pointer" }}>Brazil</span>,
          <span style={{ color: "blue", cursor: "pointer" }}>Argentina</span> ,{" "}
          <span style={{ color: "blue", cursor: "pointer" }}>Peru</span> and{" "}
          <span style={{ color: "blue", cursor: "pointer" }}>Chile</span>
        </p>
        <p>
          This site uses cookies to deliver services in accordance with this
          Privacy Policy. You can specify the conditions for storing or
          accessing cookies on your browser.
        </p>
        <p>www.docplanner.com © 2023</p>
      </div>
    </div>
  );
};

export default PresFinal;
