// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
// Constraints:

// Time Complexity - O(N)

// Space Complexity - O(1)

function maxSubarraySum1(array: number[], num: number) {
  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum += array[i];
  }

  maxSum = tempSum;
  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[num - i] + array[num];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum1([1, 4, 2, 10, 23, 3, 1, 0, 20], 3));
