// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

//Input  areThereDuplicates(1, 2, 3)

// Output: false

// areThereDuplicates(1, 2, 3)
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

export default function areThereDuplicates(...args) {
  return new Set(args).size !== arguments.length;
}

// areThereDuplicates(1, 2, 3);

console.log(areThereDuplicates('a', 'b', 'c', 'a'));
