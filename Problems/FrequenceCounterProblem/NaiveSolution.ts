const same = (array1: number[], array2: number[]) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i <= array1.length; i++) {
    let correctIndex = array2.indexOf(array1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    array2.splice(correctIndex, 1);
  }

  return true;
};
