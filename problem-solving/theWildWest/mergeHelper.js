function merge(arr1, arr2, comparator) {
  let sorted = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (typeof comparator !== "function") {
      if (arr1[i] < arr2[j]) {
        sorted.push(arr1[i]);
        i++;
      } else {
        sorted.push(arr2[j]);
        j++;
      }
    } else {
      let check = comparator(arr1[i], arr2[j]);
      if (check >= 0) {
        sorted.push(arr2[j]);
        j++;
      } else {
        sorted.push(arr1[i]);
        i++;
      }
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
  // add whatever parameters you deem necessary - good luck!
}

var arr5 = [3, 4, 5];
var arr6 = [1, 2];
merge(arr5, arr6); // [1,2,3,4,5]

var names = ["Bob", "Ethel", "Christine"];
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];

function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}

merge(names, otherNames, stringLengthComparator); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]
