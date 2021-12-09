import React, { useState, useEffect } from "react";
import "./Image.css";

const Image = ({ nasaURL }) => {
  return (
    <div>
      <img src={nasaURL} alt="Nasa Photo Of The Day" />
    </div>
  );
};
export default Image;
