// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

//Input  areThereDuplicates(1, 2, 3)

// Output: false

// areThereDuplicates(1, 2, 3)
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

export default function areThereDuplicates(...args: string[] | number[]) {
  let left = 0;
  let right = args.length - 1;
  let result = true;

  while (left < right) {
    console.log(args[left]);
    console.log(args[right]);
    if (args[left] == args[right]) {
      result = false;
    } else {
      left++;
      right--;
    }
  }

  console.log(result);
}

areThereDuplicates(1, 2, 3);

areThereDuplicates(1, 2, 2);
