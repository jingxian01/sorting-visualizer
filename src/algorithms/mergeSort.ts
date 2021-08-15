export const getMergeSortAnimations = (array: Array<number>) => {
  const animations: Array<Array<number>> = [];
  const auxArray = array.slice();
  mergeSort(array, auxArray, 0, array.length - 1, animations);

  return animations;
};

const mergeSort = (
  mainArray: Array<number>,
  auxArray: Array<number>,
  start: number,
  end: number,
  animations: Array<Array<number>>
) => {
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);
  mergeSort(auxArray, mainArray, start, mid, animations);
  mergeSort(auxArray, mainArray, mid + 1, end, animations);
  merge(mainArray, auxArray, start, mid, end, animations);
};

const merge = (
  mainArray: Array<number>,
  auxArray: Array<number>,
  start: number,
  mid: number,
  end: number,
  animations: Array<Array<number>>
) => {
  let k = start;
  let i = start;
  let j = mid + 1;

  while (i <= mid && j <= end) {
    // comparing
    animations.push([i, j]); // change color
    animations.push([i, j]); // change back to default color

    if (auxArray[i] <= auxArray[j]) {
      // overwrite value of mainArray[k] with value of auxArray[i]
      // increase k and i
      animations.push([k, auxArray[i]]); // change array-bar's height
      mainArray[k++] = auxArray[i++];
    } else {
      // overwrite value of mainArray[k] with value of auxArray[j]
      // increase k and j
      animations.push([k, auxArray[j]]); //change array-bar's height
      mainArray[k++] = auxArray[j++];
    }
  }

  while (i <= mid) {
    // comparing
    animations.push([i, i]); // change color
    animations.push([i, i]); // change back to default color

    // overwrite value of mainArray[k] with value of auxArray[j]
    // increase k and i
    animations.push([k, auxArray[i]]); // change array-bar's height
    mainArray[k++] = auxArray[i++];
  }

  while (j <= end) {
    // comparing
    animations.push([j, j]); // change color
    animations.push([j, j]); // change back to default color

    // overwrite value of mainArray[k] with value of auxArray[j]
    // increase k and i
    animations.push([k, auxArray[j]]); // change array-bar's height
    mainArray[k++] = auxArray[j++];
  }
};
