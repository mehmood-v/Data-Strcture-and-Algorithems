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
    maxSum += array[i];
  }

  tempSum = maxSum;

  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

export default maxSum;
