import React, { useEffect, useReducer, useState } from "react";
import { runBubbleSort } from "../../animations/runBubbleSort";
import { runHeapSort } from "../../animations/runHeapSort";
import { runInsertionSort } from "../../animations/runInsertionSort";
import { runMergeSort } from "../../animations/runMergeSort";
import { algorithmReducer } from "../../utils/algorithmReducer";
import { DEFAULT_COLOR } from "../../utils/animationsColor";
import { randomIntFromInterval } from "../../utils/randomIntFromInterval";
import { AlgorithmButton } from "../AlgorithmButton";
import { ArrayComponent } from "../array/ArrayComponent";
import "./SortingVisualizer.css";

interface SortingVisualizerProps {}

export const SortingVisualizer: React.FC<SortingVisualizerProps> = () => {
  const [array, setArray] = useState<Array<number>>([]);
  const [
    {
      isRunning,
      isMergeSortRunning,
      isHeapSortRunning,
      isInsertionSortRunning,
      isBubbleSortRunning,
    },
    dispatch,
  ] = useReducer(algorithmReducer, {
    isRunning: false,
    isMergeSortRunning: false,
    isHeapSortRunning: false,
    isInsertionSortRunning: false,
    isBubbleSortRunning: false,
  });

  useEffect(() => {
    resetArray();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isRunning) {
      if (isMergeSortRunning) {
        runMergeSort(array, dispatch);
      } else if (isHeapSortRunning) {
        runHeapSort(array, dispatch);
      } else if (isInsertionSortRunning) {
        runInsertionSort(array, dispatch);
      } else if (isBubbleSortRunning) {
        runBubbleSort(array, dispatch);
      }
    }
  }, [
    isRunning,
    isMergeSortRunning,
    isHeapSortRunning,
    isInsertionSortRunning,
    isBubbleSortRunning,
    array,
  ]); // eslint-disable-line react-hooks/exhaustive-deps

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

  return (
    <>
      <div className="container">
        <div className="title-bar">Sorting Visualizer</div>
        <div className="btn-bar">
          <button
            className={isRunning ? "btn btn-disabled" : "btn btn-gen"}
            disabled={isRunning ? true : false}
            onClick={() => {
              resetArray();
            }}
          >
            generate new array
          </button>
          <AlgorithmButton
            name="merge sort"
            isRunning={isRunning}
            isAlgorithmRunning={isMergeSortRunning}
            dispatch={dispatch}
            dispatchType="runMergeSort"
          />
          <AlgorithmButton
            name="heap sort"
            isRunning={isRunning}
            isAlgorithmRunning={isHeapSortRunning}
            dispatch={dispatch}
            dispatchType="runHeapSort"
          />
          <AlgorithmButton
            name="insertion sort"
            isRunning={isRunning}
            isAlgorithmRunning={isInsertionSortRunning}
            dispatch={dispatch}
            dispatchType="runInsertionSort"
          />
          <AlgorithmButton
            name="bubble sort"
            isRunning={isRunning}
            isAlgorithmRunning={isBubbleSortRunning}
            dispatch={dispatch}
            dispatchType="runBubbleSort"
          />
        </div>
        <ArrayComponent array={array} />
      </div>
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
//     const selfSortedArray = heapSort(array.slice());
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
