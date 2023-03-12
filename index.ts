function binarySearch(array, num) {
  // add whatever parameters you deem necessary - good luck!

  let start = 0;
  let end = array.length - 1;

  let mid = Math.floor(start + (end - start) / 2);

  while (mid !== num && start <= end) {
    if (num > mid) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.floor(start + (end - start) / 2);
  }

  if (array[mid] == num) {
    return mid;
  }
  return -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
