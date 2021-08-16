export const getBubbleSortAnimations = (array: Array<number>) => {
  const animations: Array<Array<number>> = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      // comparing j and j+1
      animations.push([j, j + 1]); // change to red
      animations.push([j, j + 1]); // change back to default

      if (array[j] > array[j + 1]) {
        const temp = array[j];

        // swap A[j] <- A[j+1]
        animations.push([j, array[j + 1]]); // change height
        array[j] = array[j + 1];

        // indicate j+1 is changing height
        animations.push([j + 1, j + 1]); // change to red
        animations.push([j + 1, j + 1]); // change back to default

        // swap A[j+1] <- temp (A[j])
        j === array.length - i - 2
          ? animations.push([j + 1, temp, 1]) // is last element, change height, change to purple
          : animations.push([j + 1, temp]); // is not last element, change height
        array[j + 1] = temp;
      } else {
        // remain height, for keeping animations pattern
        j === array.length - i - 2
          ? animations.push([j + 1, array[j + 1], 1]) // is last element, remain height, change to purple
          : animations.push([j + 1, array[j + 1]]); // is not last element, remain height
      }
    }
  }

  // first element
  animations.push([0, 0]); // change to red
  animations.push([0, 0]); // change back to default
  animations.push([0, array[0], 1]); // change to purple

  return animations;
};

// actual algorithm
export const bubbleSort = (array: Array<number>) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};
