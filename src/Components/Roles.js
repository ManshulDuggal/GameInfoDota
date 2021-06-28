import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

const Roles = ({ roles }) => {
  return (
    <div>
      <h1>
        This is Roles component
        {roles}
      </h1>
    </div>
  );
};

export default Roles;
