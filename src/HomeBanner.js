// src/HomeBanner.js

import React from "react";
import "./HomeBanner.css";

function HomeBanner({ handleScrollButton }) {
  return (
    <div className="banner">
      <h1>Bayvi's Nails</h1>
      <button onClick={handleScrollButton}>Come see my Nails!</button>
    </div>
  );
}

export default HomeBanner;
