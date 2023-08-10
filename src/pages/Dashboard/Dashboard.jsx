import { NavLink, Outlet } from "react-router-dom";
import Styled from ".././../assets/css/style.module.css";
import NavMenu from "../../components/Dashboard/Sidebar/NavMenu";
import React, { useState, useEffect } from "react";
import ShowOrHide from "../../assets/images/showOrHide.svg"
import Logo from "../../assets/images/logo.svg"
const Dashboard = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };

  const handleResize = () => {
    if (window.innerWidth < 980) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={Styled.page}>
        <div className={Styled.sidebar} style=
          {{
            width: open ? "260px" : "50px",
            display: open ? "" : "flex",
            alignItems: open ? "" : "center",
            transition: "0.3s",

          }}>
          <div className={Styled.sidebar_header}>
            <a href="#" style={{ display: open ? "" : "none" }}>
              <img src={Logo} alt="Logo" />
              <span>evaly</span>
            </a>

            <button onClick={handleClick}>
              <img src={ShowOrHide} alt="Show or Hide" />
            </button>
          </div>

          <NavMenu open={open} />
        </div>

        <div className={Styled.container}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
