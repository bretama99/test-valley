import React, { useEffect, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logoNew from "./logo-new.png";
import downArrow from "./home-event.png";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="h-wrapper">
      <div className="flexCenter h-container">
        <img src={logoNew} alt="logo" className="" />
        <div className="flexCenter" style={{ color: "rgb(0, 208, 148)" }}>
          <Hamburger
            color="rgb(0, 208, 148)"
            size={20}
            direction="left"
            className="image"
          />
          Category
        </div>
        <div className="flexCenter h-menu ">
          <div
            className="image h-menu-im"
            style={{
              display: "flex",
              alignItems: "center",
              width: "300px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            <FontAwesomeIcon
              icon={faSearch}
              style={{ color: "#666", marginRight: "5px" }}
            />
            <input
              width={200}
              type="text"
              placeholder="If you are wondering whether to buy it or not"
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                height: "30px",
                fontSize: "14px",
              }}
            />
          </div>
          <div className="h-menu-im">
            <img src={downArrow} alt="logo" />
          </div>
          <div style={{ borderLeft: "1px solid #ccc", height: "20px" }}></div>
          <a href="" style={{ color: "#666", marginRight: "10px" }}>
            Login / Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
