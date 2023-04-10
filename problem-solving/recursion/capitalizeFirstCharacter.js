function capitalizeFirst(arr) {
  let newArrStr = "";

  //base case to check when the original arr is empty
  if (arr.length === 0) return [];

  //gets first item in origial arr
  let firstArr = arr[0];

  //captilalize first character from first element in origial arr
  let firstCharCapital = firstArr[0].toUpperCase();

  //remove first character from first element in origial arr
  let newCharStr = firstArr.slice(1);

  //concatenate capitalized first character with the rest of character in first element in original arr
  newArrStr = firstCharCapital + newCharStr;

  //remove the first element in an arr
  let newArr = arr.splice(1);

  //call the recursive function again
  let rest = capitalizeFirst(newArr);

  //return the capitalized first char of everytime in a new array
  return [newArrStr, ...rest] ;
}

capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']
