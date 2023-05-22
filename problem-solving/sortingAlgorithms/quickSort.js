function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }
  
  function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    swap(arr, start, swapIdx);
    return swapIdx;
  }
//   i = 1,2,3,4,5,6 => end point
//   swapIdx = 1,2,3,4,5
  quickSort([7, 6, 9, 1, 2, 5, 3]);
  //pivot helper sort 
    //quickSort([7,6,1,9,2,5,3])
    //quickSort([7,6,1,2,9,5,3])
    //quickSort([7,6,1,2,5,9,3])
    //quixkSort([7,6,1,2,5,3,9])
    //quickSort([3,6,1,2,5,7,9])
  