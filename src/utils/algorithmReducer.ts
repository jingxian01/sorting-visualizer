export const algorithmReducer = (state: any, action: any) => {
  switch (action.type) {
    case "runMergeSort":
      return { ...state, isMergeSortRunning: true, isRunning: true };
    case "runHeapSort":
      return { ...state, isHeapSortRunning: true, isRunning: true };
    case "runInsertionSort":
      return { ...state, isInsertionSortRunning: true, isRunning: true };
    case "runBubbleSort":
      return { ...state, isBubbleSortRunning: true, isRunning: true };
    case "isFinished":
      return { isRunning: false };
  }
};
