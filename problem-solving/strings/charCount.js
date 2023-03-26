//A program to count numbers of times each character appeared in a given string
//we have to check if there is space or ascii types we are not interested in
//we have to check if there is a lower or upperCase letter to avoid key of char appearing twice

function charCount(str) {
  let result = {};
  str = str.toLowerCase();
  for (let char of str) {
    if (alphaNumeric(str)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}

function alphaNumeric(char) {
  let code = char.charCodeAt(char);
  if (
    !(code > 47 && code < 58) && //numeric range in ascii code
    !(code > 64 && code < 91) && //uppercase range in ascii code
    !(code > 96 && code < 123)
  ) {
    //lowercase range in ascii code
    return false;
  }
  return true;
}

charCount("hello"); // {h:1, e:1, l:2, o:1}
