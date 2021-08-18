import { Dispatch } from "react";
import { getInsertionSortAnimations } from "../algorithms/insertionSort";
import {
  CURRENT_COLOR,
  DEFAULT_COLOR,
  SORTED_COLOR,
} from "../utils/animationsColor";

export const runInsertionSort = (
  array: Array<number>,
  dispatch: Dispatch<any>
) => {
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
      }, i * 0.2);
    } else {
      setTimeout(() => {
        const [firstBar, newHeight] = animations[i];
        const firstBarStyle = arrayBars[firstBar].style;
        firstBarStyle.height = `${newHeight}px`;
        firstBarStyle.backgroundColor = SORTED_COLOR;
        if (i === animations.length - 1) {
          dispatch({ type: "isFinished" });
        }
      }, i * 0.2);
    }
  }
};
