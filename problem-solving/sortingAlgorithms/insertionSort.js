function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        //place the next index val are the j
        arr.splice(j, 0, arr[i]);
        arr.splice(i + 1, 1);
      }
    }
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);

//[2,1,9,76,4]
//[1,2,1,9,76,4]
//[1,2,9,76,4]
//[1,2,4,9,76,4]
//[1,2,4,9,76]
