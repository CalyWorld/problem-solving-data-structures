//two pointers
//checks if they are equal value,
//count variable that counts when not equal
//return number of counts
function countUniqueValues(arr) {
  if (arr.length == 0) {
    return 0;
  }

  for (let current = 0; current < arr.length; current++) {
    let next = current + 1;
    if (arr[current] === arr[next]) {
      arr.splice(next, 1);
      current--;
    }
  }
  return arr.length;
}

// countUniqueValues([1,1,1,1,1,2,3]); //2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); //7
// countUniqueValues([]) //0
// countUniqueValues([-2,-1,-1,0,1]) //4
