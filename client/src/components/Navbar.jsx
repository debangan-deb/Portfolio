import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{
        borderBottom: "1px solid grey",
      }}
    >
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img
            src="/images/Photo.jpg"
            alt="Debangan"
            className="d-sm-none"
            style={{
              height: "60px",
              width: "60px",
              objectFit: "cover",
              marginRight: "10px",
            }}
          />
          <img
            src="/images/Photo.jpg"
            alt="Debangan"
            className="d-none d-sm-block"
            style={{
              height: "80px",
              width: "80px",
              objectFit: "cover",
              marginRight: "10px",
            }}
          />
          <>

            <h1
              className="fw-bold  d-md-none "
              style={{
                fontSize: "1.1rem",
                color: "white",
              }}
            >
              DEBANGAN
            </h1>

            <h1
              className="fw-bold d-none d-md-block "
              style={{
                fontSize: "1.5rem",
                color: "white",
              }}
            >
              DEBANGAN
            </h1>
          </>

        </div>


        <button
          className="navbar-toggler text-white"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {[1, 2, 3].map((_, i) => (
              <span
                key={i}
                style={{
                  width: "25px",
                  height: "3px",
                  backgroundColor: "white",
                }}
              />
            ))}
          </div>
        </button>


        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} onClick={() => setIsOpen(false)}>

          <ul className="navbar-nav ms-auto">
            {[
              ["Home", "/"],
              ["Skills", "/skills"],
              ["Projects", "/projects"],
              ["Education", "/education"],
              ["Experience", "/experience"],
              ["Resume", "/resume"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <li className="nav-item" key={path}>
                <Link
                  to={path}
                  className="nav-link"
                  style={{
                    color: "#58a6ff",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
