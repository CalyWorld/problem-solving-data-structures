//using frequency counter
//use a spread operator to store all inputs
//put all the items in array in an object with its key value count
//check if there is any key that is greater than 1 meaning has a dup
//if not, return false
function areThereDuplicates(...dup) {
  let dupHolder = {};
  for (let key of dup) {
    if (dupHolder[key] > 0) {
      dupHolder[key]++;
    } else {
      dupHolder[key] = 1;
    }
  }
  for (let key in dupHolder) {
    if (dupHolder[key] > 1) {
      return true;
    }
  }
  return false;

  // console.log(dupHolder);
}

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
