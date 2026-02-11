// src/screens/PalmScanScreen.jsx

import React from "react";
import { PALM_SCAN_STEPS, APP_NAME } from "../utils/constants";

const PalmScanScreen = () => {
  return (
    <div>
      <h1>{APP_NAME}</h1>

      <ul>
        {PALM_SCAN_STEPS.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default PalmScanScreen;
