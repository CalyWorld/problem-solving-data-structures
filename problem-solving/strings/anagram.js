//using frequency counter problem solving
//first of all it accepts two strings
// we have to count the number of each times a char appears in a string``
// we have to check if there is key in both strings
// we have to check if key value count is the same as the key value in the second string
function validAnagram(str1, str2) {
  let str1Holder = {};
  let str2Holder = {};

  if (str1.length >= 0 && str2.length >= 0) {
    for (let char of str1) {
      if (str1Holder[char] > 0) {
        str1Holder[char]++;
      } else {
        str1Holder[char] = 1;
      }
    }
    for (let char of str2) {
      if (str2Holder[char] > 0) {
        str2Holder[char]++;
      } else {
        str2Holder[char] = 1;
      }
    }
    for (let key in str1Holder) {
      if (!key in str2Holder) {
        return false;
      }
      if (str1Holder[key] !== str2Holder[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

// validAnagram("", "") //true
// validAnagram ("aaz", "zza") //false
// validAnagram("anagram", "nagaram") //true
// validAnagram("rat", "car") //false
// validAnagram("awesome", "awesom") //false
// validAnagram("qwerty", "qeywrt") //true
// validAnagram("texttwisttime", "timetwisttext") //true
