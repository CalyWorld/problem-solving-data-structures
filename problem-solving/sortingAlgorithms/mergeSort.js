function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let halfLength = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, halfLength);
  let secondHalf = arr.slice(halfLength, arr.length);
  let left = mergeSort(firstHalf);
  let right = mergeSort(secondHalf);
  return merge(left, right);
}

function merge(arr1, arr2) {
  let sorted = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      sorted.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sorted.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sorted.push(arr2[j]);
    j++;
  }
  return sorted;
}

mergeSort([10, 24, 76, 73]);
