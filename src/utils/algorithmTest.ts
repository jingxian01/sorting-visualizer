import { randomIntFromInterval } from "./randomIntFromInterval";

// export const algorithmTest = (sortingAlgorithm: () => Array<number>) => {
//   for (let i = 0; i < 100; i++) {
//     const array = [];
//     const length = randomIntFromInterval(1, 1000);
//     for (let i = 0; i < length; i++) {
//       array.push(randomIntFromInterval(-1000, 1000));
//     }
//     const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
//     const mergeSortedArray = mergeSort(array, 0, array.length - 1);
//     const result = arraysAreEqual(javaScriptSortedArray, mergeSortedArray);

//     console.log(result);
//   }
// };

const arraysAreEqual = (first: Array<number>, second: Array<number>) => {
  if (first.length !== second.length) return false;
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};
