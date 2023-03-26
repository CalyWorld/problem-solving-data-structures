//write a function same which accepts two arrays. the function should return true if every value in the array has it's corresponding value sqaured in the second array. the frequency of the values must be the same
// has to accept two arrays
// return true if every value in the array has a correspondent sqaured
// they must be the same

function same(array1, array2) {
    //checks if the length of both arrays are the same
  if (array1.length === array2.length) {

    //creates two objects to store each number in the array and  number of times it appeared in the array as key and value pairs
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    //iterate the first array and check if it has a key of the current value, if it does increment the value by 1, if it doesn't create a key with the value of 1
    for (let value of array1) {
      if (frequencyCounter1[value] > 0) {
        frequencyCounter1[value]++;
      } else {
        frequencyCounter1[value] = 1;
      }
    }
    //iterate the second array and check if it has a key of the current value, if it does increment the value by 1, if it doesn't create a key with the value of 1
    for (let value of array2) {
      if (frequencyCounter2[value] > 0) {
        frequencyCounter2[value]++;
      } else {
        frequencyCounter2[value] = 1;
      }
    }
    //iterate the first object and check if the key squared (not the value) is in the second object.
    for (let key in frequencyCounter1) {
      if (!(key * key) in frequencyCounter2) {
        return false;
      }

      //check if the value of the key squared in the first object is equal to the value of the key in the second object vice versa
      if (frequencyCounter1[key] !== frequencyCounter2[key * key]) {
        return false;
      }
    }
    //if all the conditions are met return true
    return true;
  }
  //if the length of the arrays are not the same return false
  return false;
}

// same([1,2,3],[4,1,9]); //true
// same([1,2,3],[1,9]); //false
same([1, 2, 1], [4, 4, 1]); //false
