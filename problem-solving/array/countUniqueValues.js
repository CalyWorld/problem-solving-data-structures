//two pointers
//checks if they are equal value,
//if not, the current moves and the next moves by 1 of the current
//if they are, the next is removed and the current doesn't move with the decrement untill they are not the same
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

// countUniqueValues([1,1,1,1,1,2,3]); //3
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); //7
// countUniqueValues([]) //0
// countUniqueValues([-2,-1,-1,0,1]) //4
