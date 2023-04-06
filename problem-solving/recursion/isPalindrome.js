// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
      //gets the beginning of str and end of str
      //check if they are not isPalindrome, 
      // return false
      // if str is less than or equal to 1 
      //return true 
      // assign the new str without the first and last char
      // pass the new str into the isPalindrome
      // return isPalindrome;
      
      //firstChar in str
      let firstChar = str[0];
      
      //lastChar in str 
      let lastChar = str[str.length-1];
  
      //new str passed length should be 1 or less than 1,
      if(str.length <= 1) return true;
      
      //new str passed firstChar and lastChar are not the same 
      if(firstChar !== lastChar) return false;
      //remove the firstChar and lastChar
      let newStr = str.slice(1, -1);
      //return the function recursively with newStr
      return isPalindrome(newStr);
      
  }