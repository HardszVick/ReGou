import React from "react";
import { Plants } from "../../infrastructure/repository/PlantRepo";

const ImageComponent: React.FC<Plants> = ({ name, image }) => {
  return (
    <div>
      <div>{image}</div>
      <div>{name}</div>
    </div>
  );
};

export default ImageComponent;
