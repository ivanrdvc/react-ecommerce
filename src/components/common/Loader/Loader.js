import React from "react";
import "./Loader.css";

function Loader(props) {
  return (
    <div className="Loader">
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </div>
  );
}

export default Loader;
