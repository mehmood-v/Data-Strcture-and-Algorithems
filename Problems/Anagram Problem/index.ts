// check both arrays length if not same return false

//  map over the first string and count each character and save in an object as key value

// map over the second string and check every character if it exist the object

// if exist decrease count and if doesn't exist return false

export default function validAnagram(first: string, second: string) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    const letter = first[i];

    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!lookup[letter]) {
      return false;
    }

    lookup[letter] -= 1;
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm');
