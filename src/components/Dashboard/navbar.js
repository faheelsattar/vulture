import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Drawer from "./shared/drawer";
import { useLocation } from "react-router-dom";
import { DRAWER_LINKS } from "./dashdrawerdata";
const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <header className="user-dash-nav">
        <div className="user-dash-nav-holder">
          <div className="user-dash-nav-hamburger">
            <p className="page-name-holder">Home</p>
          </div>
          <div className="header-item">
            <ul>
              <div className="search-bar-holder">
                <button className="btn-search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  </svg>
                </button>
                <input className="inpt-search" />
              </div>
            </ul>
          </div>
          <div className="header-item">
            <ul>
              <li>
                <Link to="/profile">
                  <img
                    alt="profile"
                    className="navbar-link-img"
                    src="https://res.cloudinary.com/printasaanassets/image/upload/v1613950172/PrintAsaan/images/dashboard/navbar/Icons/User_tnwbmu.svg"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {location.pathname === "/meeting" ? (
        <div>
          {console.log(DRAWER_LINKS)}
          <Drawer />
        </div>
      ) : (
        <Drawer DRAWER_LINKS={DRAWER_LINKS} />
      )}
    </>
  );
};

export default Navbar;
