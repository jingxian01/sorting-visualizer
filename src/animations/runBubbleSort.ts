import { Dispatch } from "react";
import { getBubbleSortAnimations } from "../algorithms/bubbleSort";
import {
  CURRENT_COLOR,
  DEFAULT_COLOR,
  SORTED_COLOR,
} from "../utils/animationsColor";

export const runBubbleSort = (
  array: Array<number>,
  dispatch: Dispatch<any>
) => {
  const animations = getBubbleSortAnimations(array);
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
        const [firstBar, newHeight, isLastElement] = animations[i];
        const firstBarStyle = arrayBars[firstBar].style;
        firstBarStyle.height = `${newHeight}px`;
        if (isLastElement) {
          firstBarStyle.backgroundColor = SORTED_COLOR;
        }
        if (i === animations.length - 1) {
          dispatch({ type: "isFinished" });
        }
      }, i * 0.2);
    }
  }
};
