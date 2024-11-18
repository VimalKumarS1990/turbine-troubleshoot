import React from "react";
import "./DropDowns.css";

const DropDowns = (props) => {
  const {
    facilityList,
    turbineList,
    facility,
    turbine,
    setFacility,
    setTurbine,
  } = props;

  const handleFacilitySelect = (item) => {
    setFacility(item.facilityName);
  };

  const handleTurbineSelect = (item) => {
    setTurbine(item.turbineName);
  };
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
          {facility || "Select Facility"}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {facilityList.map((item) => (
            <li
              className="dropdown-item"
              key={item.facilityCode}
              value={facility}
              onClick={() => handleFacilitySelect(item)}
            >
              {item.facilityName}
            </li>
          ))}
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
          {turbine || "Select Turbine"}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          {turbineList.map((item) => (
            <li
              className="dropdown-item"
              key={item.turbineCode}
              value={turbine}
              onClick={() => handleTurbineSelect(item)}
            >
              {item.turbineName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDowns;
