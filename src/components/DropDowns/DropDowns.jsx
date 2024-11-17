import React from "react";
import "./DropDowns.css";

const DropDowns = () => {
  return (
    <div className="d-flex dropDown-container my-1 ml-2">
      <div className="dropdown">
        <button
          className="btn btn-dark btn-sm dropdown-toggle dropdown-btn"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Facility
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="dropdown-item">Facility 1</li>
          <li className="dropdown-item">Facility 2</li>
          <li className="dropdown-item">Facility 3</li>
        </ul>
      </div>
      <div className="dropdown ml-2 sec2">
        <button
          className="btn btn-dark btn-sm dropdown-toggle dropdown-btn"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Turbine
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <li className="dropdown-item">Turbine 1</li>
          <li className="dropdown-item">Turbine 2</li>
          <li className="dropdown-item">Turbine 3</li>
        </ul>
      </div>
    </div>
  );
};

export default DropDowns;
