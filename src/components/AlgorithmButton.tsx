import React, { Dispatch } from "react";

interface AlgorithmButtonProps {
  name: string;
  isRunning: boolean;
  isAlgorithmRunning: boolean;
  dispatch: Dispatch<any>;
  dispatchType: string;
}

export const AlgorithmButton: React.FC<AlgorithmButtonProps> = ({
  name,
  isRunning,
  isAlgorithmRunning,
  dispatch,
  dispatchType,
}) => {
  return (
    <button
      className={
        isRunning
          ? isAlgorithmRunning
            ? "btn btn-running"
            : "btn btn-disabled"
          : "btn btn-algo"
      }
      disabled={isRunning ? true : false}
      onClick={() => {
        dispatch({ type: dispatchType });
      }}
    >
      {name}
    </button>
  );
};
