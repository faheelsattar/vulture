import React, { useState } from "react";
import Navbar from "./navbar";
import Topcover from "./topcover";
import Users from "./users";
import Usp from "./usp";
import Features from "./features";
import Reviews from "./reviews";
import Modal from "../Shared/modal";
import Auth from "./auth/auth";
const Home = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="home-main">
      <Navbar handleOpen={handleOpen} />
      <Topcover />
      <Usp />
      <Users />
      <Features />
      <Reviews />
      <Modal open={open} handleClose={handleClose} size="sm">
        <Auth />
      </Modal>
    </div>
  );
};

export default Home;
