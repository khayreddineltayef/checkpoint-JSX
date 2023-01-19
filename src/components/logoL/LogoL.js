import React from "react";
const listlogo = [
  {
    url: "https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/press_rooms/company_logos/263/logo-ZnanyLekarz.jpg",
    id: Math.random(),
  },
  {
    url: "https://www.doctoralia.com.mx/img/mx/logo/logo-default-mx.svg?v=4",
    id: Math.random(),
  },
  {
    url: "https://www.miodottore.it/img/it/logo/logo-default-it.svg?v=4",
    id: Math.random(),
  },
  {
    url: " https://files.sikayetvar.com/lg/cmp/19/19620.png?1522650125",
    id: Math.random(),
  },
];
const listlogou = [
  {
    url: "https://theme.zdassets.com/theme_assets/162600/1aae5a527c65c57aeebcc8488a687605c6223288.png",
    id: Math.random(),
  },
  {
    url: "https://media.glassdoor.com/sqll/944650/jameda-squareLogo-1670837418232.png",
    id: Math.random(),
  },
  {
    url: "https://techbusiness.it/wp-content/uploads/2019/11/logo-tuotempo.jpg",
    id: Math.random(),
  },
  {
    url: "https://th.bing.com/th/id/OIP.TaE5KEXVte6m5axXt1h5XgHaCc?w=350&h=115&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    id: Math.random(),
  },
];

const LogoL = () => {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "200px",
        marginTop: "60px",
      }}
    >
      <h1
        style={{
          height: "101px",
          width: "320px",
          fontSize: "26px",
          textAlign: "center",
          display: "block",
        }}
      >
        We are a global company with local culture
      </h1>
      <div style={{ marginLeft: "50px" }}>
        <div style={{ display: "flex" }}>
          {listlogo.map((el) => (
            <div
              style={{
                margin: "10px 10px 10px 10px",
              }}
            >
              <img height="50px" width="125px" src={el.url} alt="" />
            </div>
          ))}
        </div>
        <div style={{ display: "flex" }}>
          {listlogou.map((el) => (
            <div
              style={{
                margin: "10px 10px 10px 10px",
              }}
            >
              <img height="35px" width="125px" src={el.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoL;
