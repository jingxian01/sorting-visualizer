export const getInsertionSortAnimations = (array: Array<number>) => {
  const animations: Array<Array<number>> = [];

  for (let j = 1; j < array.length; j++) {
    let i = j - 1;

    while (i > -1 && array[i] > array[j]) {
      animations.push([i, j]);
      animations.push([i, j]);

      const temp = array[i];

      animations.push([i, array[j], 1]); // change height
      array[i--] = array[j];

      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([j, temp, 1]); // change height
      array[j--] = temp;
    }
  }

  return animations;
};

// actual algorithm
export const insertionSort = (array: Array<number>) => {
  for (let j = 1; j < array.length; j++) {
    let i = j - 1;

    while (i > -1 && array[i] > array[j]) {
      const temp = array[i];
      array[i--] = array[j];
      array[j--] = temp;
    }
  }

  return array;
};
