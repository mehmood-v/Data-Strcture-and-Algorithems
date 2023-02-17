// Find the maximum sum of a Sub Array

// Input:

//Array: [1, 4, 6, 4, 7, 9, 5, 6, 4]

// Number: 4

//  Output: Maximum count of sub array of size 4

const maxSum = (array: number[], num = 4) => {
  if (array.length < num) return;

  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum += array[i];
  }

  // for (let i = 0; i < array.length; i++) {}

  console.log(tempSum);
};

maxSum([1, 4, 6, 4, 7, 9, 5, 6, 4], 4);
export default maxSum;
