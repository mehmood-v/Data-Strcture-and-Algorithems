// import { charCount } from './Problems/CharacterCount/FindCharactersCount';
//import AnagramSolution from './Problems/Anagram Problem';
// import FrequencyCounterBetterSolution from './Problems/FrequencyCounterProblem/BetterSolution';

// console.log(FrequencyCounterBetterSolution);
// charCount('The Quick brown fox jumps over the lazy dog');

//console.log(AnagramSolution('anagram', 'nagaram'));

function maxSubarraySum(arr: number[], num: number) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
export default maxSubarraySum;
