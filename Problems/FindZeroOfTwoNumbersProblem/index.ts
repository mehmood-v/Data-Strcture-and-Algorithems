export default (nums: number[]) => {
  let left = nums.length;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === 0) {
      return [nums[left], nums[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};
