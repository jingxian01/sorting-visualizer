import React, { useEffect, useState } from "react";
import { getInsertionSortAnimations } from "../algorithms/insertionSort";
import { getMergeSortAnimations } from "../algorithms/mergeSort";
import { useWindowDimensions } from "../hooks/useWindowDimension";
import { randomIntFromInterval } from "../utils/randomIntFromInterval";
import { ArrayComponent } from "./ArrayComponent";
import { Message } from "./Message";

import "./SortingVisualizer.css";

const DEFAULT_COLOR = "#32d1c4";
const CURRENT_COLOR = "red";
const SORTED_COLOR = "purple";

interface SortingVisualizerProps {}

export const SortingVisualizer: React.FC<SortingVisualizerProps> = () => {
  const [array, setArray] = useState<Array<number>>([]);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    resetArray();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
            firstBarStyle.backgroundColor !== SORTED_COLOR &&
            secondBarStyle.backgroundColor !== SORTED_COLOR
          ) {
            firstBarStyle.backgroundColor = color;
            secondBarStyle.backgroundColor = color;
          } else if (firstBarStyle.backgroundColor !== SORTED_COLOR) {
            firstBarStyle.backgroundColor = color;
          } else if (secondBarStyle.backgroundColor !== SORTED_COLOR) {
            secondBarStyle.backgroundColor = color;
          }
        }, i * 2);
      } else {
        setTimeout(() => {
          const [firstBar, newHeight, isFinalMerge] = animations[i];
          const firstBarStyle = arrayBars[firstBar].style;
          firstBarStyle.height = `${newHeight}px`;
          if (isFinalMerge) {
            firstBarStyle.backgroundColor = SORTED_COLOR;
          }
        }, i * 2);
      }
    }
  };

  const runInsertionSort = () => {
    const animations = getInsertionSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars: any = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [firstBar, secondBar] = animations[i];
        const firstBarStyle = arrayBars[firstBar].style;
        const secondBarStyle = arrayBars[secondBar].style;
        const color = i % 3 === 0 ? CURRENT_COLOR : DEFAULT_COLOR;
        setTimeout(() => {
          firstBarStyle.backgroundColor = color;
          secondBarStyle.backgroundColor = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          const [firstBar, newHeight] = animations[i];
          const firstBarStyle = arrayBars[firstBar].style;
          firstBarStyle.height = `${newHeight}px`;
          firstBarStyle.backgroundColor = SORTED_COLOR;
        }, i * 1);
      }
    }
  };

  return (
    <>
      {width <= 768 ? (
        <Message />
      ) : (
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
            <button className="btn btn-algo" onClick={runInsertionSort}>
              insertion sort
            </button>
          </div>
          <ArrayComponent array={array} />
        </div>
      )}
    </>
  );
};

// for testing algorithms
// const testSortingAlgorithms = () => {
//   for (let i = 0; i < 100; i++) {
//     const array = [];
//     const length = randomIntFromInterval(1, 1000);
//     for (let i = 0; i < length; i++) {
//       array.push(randomIntFromInterval(-1000, 1000));
//     }
//     const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
//     const selfSortedArray = insertionSort(array.slice());
//     console.log(arraysAreEqual(javaScriptSortedArray, selfSortedArray));
//   }
// };

// const arraysAreEqual = (
//   firstArray: Array<number>,
//   secondArray: Array<number>
// ) => {
//   if (firstArray.length !== secondArray.length) return false;
//   for (let i = 0; i < firstArray.length; i++) {
//     if (firstArray[i] !== secondArray[i]) {
//       return false;
//     }
//   }
//   return true;
// };
