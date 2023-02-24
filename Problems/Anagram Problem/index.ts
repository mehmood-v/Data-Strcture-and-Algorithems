// Check the anagram problem
// Map over the first string and count each character
// Map over the second string and check if every character exist in the counts object

//return true if all characters exist in counts else return false

export default function ValidAnagram(str1: string, str2: string) {
  if (str1.length !== str2.length) {
    return;
  }

  let counts = {};
  let result = true;

  for (let char of str1) {
    counts[char] = counts[char] ? (counts[char] += 1) : 1;
  }

  for (let char of str2) {
    if (!counts[char]) {
      result = false;
    }
  }

  console.log(result);
}

ValidAnagram('anagrams', 'nagaramm');
