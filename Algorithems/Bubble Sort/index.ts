// Bubble sort

// for loop starting from array.length

// inner loop starting from 0 to j< i-1

// check if array[j]>array[j+1]

// create temp var to store array[j]

//array[j] = array[j+1]

// array[j+1] = temp;
const BubbleSort = (array: number[]) => {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

BubbleSort([23, 10, 2, 4, 5, 32, 12, 34]);
