// import { charCount } from './Problems/CharacterCount/FindCharactersCount';
//import AnagramSolution from './Problems/Anagram Problem';
// import FrequencyCounterBetterSolution from './Problems/FrequencyCounterProblem/BetterSolution';

// console.log(FrequencyCounterBetterSolution);
// charCount('The Quick brown fox jumps over the lazy dog');

//console.log(AnagramSolution('anagram', 'nagaram'));

const maxSum = (arr: number[], k = 4) => {
  let i = 0;
  let j = arr.length - 1;
  let tempSum = 0;
  let totalSum = 0;
  for (let i = 0; i <= k; i++) {
    tempSum += arr[i];
  }

  console.log(tempSum);
};

maxSum([1, 4, 6, 4, 7, 9, 5, 6, 4]);
export default maxSum;
