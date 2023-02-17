// import { charCount } from './Problems/CharacterCount/FindCharactersCount';
//import AnagramSolution from './Problems/Anagram Problem';
// import FrequencyCounterBetterSolution from './Problems/FrequencyCounterProblem/BetterSolution';

// console.log(FrequencyCounterBetterSolution);
// charCount('The Quick brown fox jumps over the lazy dog');

//console.log(AnagramSolution('anagram', 'nagaram'));

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

  console.log(maxSum);
};

maxSum([1, 4, 6, 4, 7, 9, 5, 6, 4], 4);
// export default maxSum;

// function maxSubarraySum(arr: number[], num: number) {
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }

// maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
// export default maxSubarraySum;
