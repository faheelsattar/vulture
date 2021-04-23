import React, { useState } from "react";
import "./drawer.css";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";

const Drawer = (props) => {
  const [link, setLink] = useState("/home");
  const drawerlinks = props.DRAWER_LINKS.map((data) => {
    return (
      <Link to={data.path} key={data.id} onClick={() => setLink(data.path)}>
        <Tooltip
          title={
            <p style={{ fontWeight: "bold", padding: "0", margin: "0" }}>
              {data.tooltip}
            </p>
          }
          placement="right"
          arrow
        >
          <li className={link === data.path ? "list-item active-link" : "list-item"}>
            {data.svg}
          </li>
        </Tooltip>
      </Link>
    );
  });
  return (
    <div className="main-drawer">
      <div className="user-dash-nav-hamburger">
        <a className="logo-holder">
          <img className="main-logo" src="./images/logo/temp-logo.svg" />
        </a>
      </div>
      <div className="drawer-items-holder">
        <ul className="drawer-list">{drawerlinks}</ul>
      </div>
    </div>
  );
};

export default Drawer;
