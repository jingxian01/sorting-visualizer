import { Dispatch } from "react";
import { getMergeSortAnimations } from "../algorithms/mergeSort";
import {
  CURRENT_COLOR,
  DEFAULT_COLOR,
  SORTED_COLOR,
} from "../utils/animationsColor";

export const runMergeSort = (array: Array<number>, dispatch: Dispatch<any>) => {
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
        if (i === animations.length - 1) {
          dispatch({ type: "isFinished" });
        }
      }, i * 2);
    }
  }
};
