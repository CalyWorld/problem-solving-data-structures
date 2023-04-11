function bubbleSort(arr) {
  //checker to see if there was swap or not to avoid iteration when list is almost sorted
  let noSwaps = true;
  //loop through array from end to the beginning
  for (let i = arr.length; i > 0; i--) {
    //j should loop from beginning to the end using the length i to get the index  j < i-1
    for (let j = 0; j < i - 1; j++) {
      //check if the start element arr[j] is greater than the next element using arr[j+1]
      if (arr[j] > arr[j + 1]) {
        //if it is, pass the array, index j and the next index j+1
        swap(arr, j, j + 1);
        //if there was a swap, change the swap checker to false
        noSwaps = false;
      }
    }
    //if there was no swap, break.. this notifies us that the array is sorted since noSwaps didn't change to false in the nexted for loop
    if (noSwaps) {
      break;
    }
  }
  //return sorted array
  return arr;
}

const swap = (arr, idx1, idx2) => {
  //temp variable becomes the start element
  let temp = arr[idx1]; // 0
  //start element becomes the next element
  arr[idx1] = arr[idx2]; // 1
  //next element becomes the temp variable
  arr[idx2] = temp; // 0
};

bubbleSort([10, 6, 4, 30, 68, 18, 20]); //[4,6,10,18,20,30,68]
//([6,4,10,30,68,18,20])
//([4,6,10,30,68,18,20])
//([4,6,10,30,18,20,68])
//([4,6,10,18,20,30,68])
