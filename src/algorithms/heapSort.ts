export const getHeapSortAnimations = (array: Array<number>) => {
  const animations: Array<Array<number>> = [];
  let heapSize = array.length;

  // build
  buildHeapAnimations(array, heapSize, animations);

  // extract
  for (let i = array.length - 1; i > 0; i--) {
    const temp = array[0];

    // swapping array[i] to first element, array[0]
    animations.push([0, i]); // change to red
    animations.push([0, i]); // change back to default
    animations.push([0, array[i]]); // change height
    array[0] = array[i];

    // swapping temp(first element, array[0]) back to array[i]
    animations.push([0, i]); // change to red
    animations.push([0, i]); // change back to default
    animations.push([i, temp, 1]); // change height, change to purple
    array[i] = temp;

    heapSize -= 1;
    maxHeapifyAnimations(array, heapSize, 0, animations);
  }

  // first element
  animations.push([0, 0]); // change to red
  animations.push([0, 0]); // change back to default
  animations.push([0, array[0], 1]); // change to purple

  return animations;
};

const buildHeapAnimations = (
  array: Array<number>,
  heapSize: number,
  animations: Array<Array<number>>
) => {
  const startIndex = Math.floor(array.length / 2) - 1;
  for (let i = startIndex; i >= 0; i--) {
    maxHeapifyAnimations(array, heapSize, i, animations);
  }
};

const maxHeapifyAnimations = (
  array: Array<number>,
  heapSize: number,
  index: number,
  animations: Array<Array<number>>
) => {
  const left = index * 2 + 1;
  const right = index * 2 + 2;
  let largest = index;

  if (left < heapSize && array[left] > array[largest]) {
    // checking left and largest
    animations.push([left, largest]); // change to red
    animations.push([left, largest]); // change back to default

    // keeping animations pattern
    // remain height
    animations.push([left, array[left], 0]);
    largest = left;
  }
  if (right < heapSize && array[right] > array[largest]) {
    // checking right and largest
    animations.push([right, largest]); // change to red
    animations.push([right, largest]); // change back to default

    // keeping animations pattern
    // remain height
    animations.push([right, array[right], 0]);
    largest = right;
  }

  if (largest !== index) {
    const temp = array[index];

    // swapping array[largest] to array[index]
    animations.push([index, largest]); // change to red
    animations.push([index, largest]); // change back to default
    animations.push([index, array[largest]]); // change height
    array[index] = array[largest];

    // swapping temp (array[index]) back to array[largest]
    animations.push([index, largest]); // change to red
    animations.push([index, largest]); // change back to default
    animations.push([largest, temp]); // change height
    array[largest] = temp;

    maxHeapifyAnimations(array, heapSize, largest, animations);
  }
};

// actual algorithm
export const heapSort = (array: Array<number>) => {
  let heapSize = array.length;

  // build
  buildHeap(array, heapSize);

  // extract
  for (let i = array.length - 1; i > 0; i--) {
    const temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    heapSize -= 1;
    maxHeapify(array, heapSize, 0);
  }

  return array;
};

const buildHeap = (array: Array<number>, heapSize: number) => {
  const startIndex = Math.floor(array.length / 2) - 1;
  for (let i = startIndex; i >= 0; i--) {
    maxHeapify(array, heapSize, i);
  }
};

const maxHeapify = (array: Array<number>, heapSize: number, index: number) => {
  const left = index * 2 + 1;
  const right = index * 2 + 2;
  let largest = index;

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }
  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== index) {
    const temp = array[index];
    array[index] = array[largest];
    array[largest] = temp;
    maxHeapify(array, heapSize, largest);
  }
};
