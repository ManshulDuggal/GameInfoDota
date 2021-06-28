import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
const Games = ({ img }) => {
  return (
    <div>
      <div className="games">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Games;
