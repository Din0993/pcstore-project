import React from "react";
import { useNavigate } from "react-router-dom";
const PCComponents = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>PC Components Page</h1>
      <button onClick={() => navigate(`/pc-components/gpu`)}>Gpu</button>
    </div>
  );
};

export default PCComponents;
