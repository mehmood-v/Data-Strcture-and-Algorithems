// Count characters in a string

// Example

// "The Quick brown fox jumps over the lazy dog"

//{t:2}

// Define a characters count function

// pass string as a parameter

// declare result object to store the key valu of each character count

//loop over the string to check each character

// if chacter already exist in result variable simply increment 1 for that character

//else

// add new character into result var

export const charCount = (str: string) => {
  const result: any = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLocaleLowerCase();

    console.log(++result[char]);
    result[char] = ++result[char] || 1;

    // if (result[char]) {
    //   result[char] = result[char] + 1;
    // } else {
    //   result[char] = result[char] = 1;
    // }
  }

  console.log(result);
};

// charCount('The Quick brown fox jumps over the lazy dog');
