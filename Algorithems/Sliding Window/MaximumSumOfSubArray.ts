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
