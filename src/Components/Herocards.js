import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
const Heroes = ({ name, type, img, legs, icon }) => {
  return (
    <div>
      <div className="hero">
        <h1>{name}</h1>
        <img src={img} alt="Hero" />
      </div>
      <div>
        <h1>icon</h1>
        <img src={icon} alt="" />
      </div>
      <h3>Hero Type</h3>
      <h3>{type}</h3>
      <h3>{legs}</h3>
      <h2>Roles</h2>
    </div>
  );
};

export default Heroes;
