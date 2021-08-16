import React, { useEffect, useState } from "react";
import { getMergeSortAnimations } from "../algorithms/mergeSort";
import { useWindowDimensions } from "../hooks/useWindowDimension";
import { randomIntFromInterval } from "../utils/randomIntFromInterval";
import { ArrayComponent } from "./ArrayComponent";

import "./SortingVisualizer.css";

const DEFAULT_COLOR = "#32d1c4";
const CURRENT_COLOR = "red";
const FINISH_COLOR = "purple";

interface SortingVisualizerProps {}

export const SortingVisualizer: React.FC<SortingVisualizerProps> = () => {
  const [array, setArray] = useState<Array<number>>([]);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    if (array) {
      const arrayBars: any = document.getElementsByClassName("array-bar");
      for (let i = 0; i < array.length; i++) {
        arrayBars[i].style.backgroundColor = DEFAULT_COLOR;
      }
    }
    const newArray = [];
    for (let i = 0; i < 300; i++) {
      newArray.push(randomIntFromInterval(20, 700));
    }
    setArray(newArray);
  };

  const runMergeSort = () => {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars: any = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [firstBar, secondBar] = animations[i];
        const firstBarStyle = arrayBars[firstBar].style;
        const secondBarStyle = arrayBars[secondBar].style;
        const color = i % 3 === 0 ? CURRENT_COLOR : DEFAULT_COLOR;
        setTimeout(() => {
          if (
            firstBarStyle.backgroundColor !== FINISH_COLOR &&
            secondBarStyle.backgroundColor !== FINISH_COLOR
          ) {
            firstBarStyle.backgroundColor = color;
            secondBarStyle.backgroundColor = color;
          } else if (firstBarStyle.backgroundColor !== FINISH_COLOR) {
            firstBarStyle.backgroundColor = color;
          } else if (secondBarStyle.backgroundColor !== FINISH_COLOR) {
            secondBarStyle.backgroundColor = color;
          }
        }, i * 2);
      } else {
        setTimeout(() => {
          const [firstBar, newHeight, isFinalMerge] = animations[i];
          const firstBarStyle = arrayBars[firstBar].style;
          firstBarStyle.height = `${newHeight}px`;
          if (isFinalMerge) {
            firstBarStyle.backgroundColor = FINISH_COLOR;
          }
        }, i * 2);
      }
    }
  };

  return (
    <div
      className="container"
      style={{ minHeight: `${height}px`, minWidth: `${width}px` }}
    >
      <div className="title-bar">Sorting Visualizer</div>
      <div className="btn-bar">
        <button className="btn btn-gen" onClick={resetArray}>
          generate new array
        </button>
        <button className="btn btn-algo" onClick={runMergeSort}>
          merge sort
        </button>
        <button className="btn btn-algo" onClick={runMergeSort}>
          merge sort
        </button>
        <button className="btn btn-algo" onClick={runMergeSort}>
          merge sort
        </button>
        <button className="btn btn-algo" onClick={runMergeSort}>
          merge sort
        </button>
      </div>
      <ArrayComponent array={array} />
    </div>
  );
};
