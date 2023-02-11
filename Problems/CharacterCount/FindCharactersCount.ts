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

  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLocaleLowerCase();

      result[char] = ++result[char] || 1;
    }
  }

  console.log(result);
};

function isAlphaNumeric(char: string) {
  const code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

// charCount('The Quick brown fox jumps over the lazy dog');
