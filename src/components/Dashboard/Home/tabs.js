import React, { useState } from "react";
import Modal from "../shared/modal";
import Curvedsquare from "./curvedsquare";
import "./tabs.css";
import { TABS_DATA } from "./tabsdata";
import Formhome from "./forms/index";

const Tabs = () => {
  const [open, setOpen] = useState(false);
  const [formid, setFormId] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  }
  const tabs = TABS_DATA.map((data) => {
    return (
      <div className="col-md-6 col-sm-6 col-xs-6 px-0">
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            setFormId(data.id);
            handleOpen();
          }}
        >
          <Curvedsquare
            key={data.id}
            img={data.img}
            label={data.text}
            bckclr={data.id === 1 ? "curv-sqr-bck-green" : "curv-sqr-bck-grey"}
          />
        </a>
      </div>
    );
  });
  return (
    <div className="tabs-holder">
      <div className="row">{tabs}</div>
      <Modal
        open={open}
        handleClose={handleClose}
        size="sm"
        heading="New Room"
        subheading="Enter the following fileds to start a new room"
      >
        <Formhome id={formid}/>
      </Modal>
    </div>
  );
};

export default Tabs;
