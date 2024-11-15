import React, { useState } from "react";
import "./SideBar.css";
import { MdOutlineChat } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiLight } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdOpen } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

const SideBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <nav
        className={`sidebar bg-light ${
          isNavVisible ? "d-flex" : "d-none"
        } d-lg-flex`}
        style={{
          position: isNavVisible ? "absolute" : "relative",
          height: isNavVisible ? "90%" : "auto",
        }}
      >
        <div className="section1">
          {/* <button
            className="btn btn-dark mb-4 mt-4"
            style={{ fontSize: "0.9em" }}
          >
            + New Work Order
          </button> */}
          <chat className="chat d-flex align-items-center p-1">
            <span>
              <MdOutlineChat />
            </span>
            <span className="ml-1">
              <p style={{ fontWeight: "500", margin: 0 }}>Prev - WO-Conv-1</p>
            </span>
          </chat>
          <chat className="chat d-flex align-items-center p-1">
            <span>
              <MdOutlineChat />
            </span>
            <span className="ml-1">
              <p style={{ fontWeight: "500", margin: 0 }}>Prev - WO-Conv-1</p>
            </span>
          </chat>
        </div>
        <div className="section2">
          <hr />
          <ul className="p-2">
            <li style={{ paddingTop: 0 }}>
              <span className="ml-2">
                <RiDeleteBin5Line />
              </span>
              <span>
                <p>Clear Prev.Chats</p>
              </span>
            </li>
            <li>
              <span className="ml-2">
                <CiLight />
              </span>
              <span>
                <p>Light Mode</p>
              </span>
            </li>
            <li>
              <span className="ml-2">
                <IoPersonOutline />
              </span>
              <span>
                <p>My Profile</p>
              </span>
            </li>
            <li>
              <span className="ml-2">
                <IoMdOpen />
              </span>
              <span>
                <p>Help/FAQ</p>
              </span>
            </li>
            <li>
              <span className="ml-2">
                <FiLogOut />
              </span>
              <span>
                <p>Log out</p>
              </span>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile View */}
      <button
        type="button"
        onClick={toggleNav}
        className="btn p-0 d-block d-lg-none"
        style={{
          maxHeight: "50px",
          fontSize: "2em",
          background: "none",
          border: "none",
          zIndex: "1001",
          marginLeft: "10px",
        }}
        aria-label="Toggle menu"
      >
        <BiMenuAltLeft />
      </button>
    </>
  );
};

export default SideBar;
