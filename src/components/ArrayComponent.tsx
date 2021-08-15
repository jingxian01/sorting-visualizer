import React from "react";

import "./ArrayComponent.css";

interface ArrayComponentProps {
  array: Array<number>;
}

export const ArrayComponent: React.FC<ArrayComponentProps> = ({ array }) => {
  return (
    <div className="array-container">
      {array.map((arr, index) => {
        return (
          <div
            className="array-bar"
            key={index}
            style={{ height: `${arr}px` }}
          ></div>
        );
      })}
    </div>
  );
};
