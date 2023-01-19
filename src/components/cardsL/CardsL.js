import React from "react";
import { Dropdown } from "react-bootstrap";
const table = [
  {
    url: "https://www.docplanner.com/icons/icon-patients.svg",
    titre: "For patients",
    paragra: "Find a doctor, book a visit and solve any health-related doubt",
    bColor: "#00CCB1",
  },
  {
    url: "https://www.docplanner.com/icons/icon-doctors.svg",
    titre: "For doctors",
    paragra: "Save time managing visits and cut no-shows by half",
    bColor: "#3D83DF",
  },
  {
    url: "https://www.docplanner.com/icons/icon-clinics.svg",
    titre: "For clincs",
    paragra: "Deliver an exceptional patient experience in your clinic",
    bColor: "#1B2734",
  },
];

const CardsL = () => {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "100px",
        justifyContent: "space-evenly",
        marginTop: "60px",
      }}
    >
      {table.map((el) => (
        <div
          style={{
            backgroundColor: el.bColor,
            height: "345px",
            width: "311px",
            color: "white",
            borderRadius: "15px",
          }}
        >
          <img src={el.url} alt="" />
          <h1>{el.titre}</h1>
          <p>{el.paragra}</p>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: el.bColor,
                border: "none",
                marginTop: "120px",
                textDecoration: "underline",
              }}
              variant="success"
              id="dropdown-basic"
            >
              Select Country
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Brasil</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Argentina</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Tunisia</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      ))}
    </div>
  );
};

export default CardsL;
