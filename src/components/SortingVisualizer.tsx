import React, { useEffect, useState } from "react";
import { mergeSort } from "../algorithms/mergeSort";
import { ArrayComponent } from "./ArrayComponent";

interface SortingVisualizerProps {}

export const SortingVisualizer: React.FC<SortingVisualizerProps> = () => {
  const [array, setArray] = useState<Array<number>>([]);

  useEffect(() => {
    resetArray();
  }, []);

  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < 310; i++) {
      array.push(randomIntFromInterval(5, 700));
    }
    setArray(array);
  };

  return (
    <div>
      <div style={{ marginTop: "10px" }}>sorting visualizer</div>
      <button
        onClick={() => {
          resetArray();
        }}
      >
        generate new array
      </button>
      <button
        onClick={() => {
          mergeSort();
        }}
      >
        merge sort
      </button>
      <ArrayComponent array={array} />
    </div>
  );
};
