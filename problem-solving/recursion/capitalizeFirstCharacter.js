function capitalizeFirst(arr) {
  let newArrStr = "";

  let capitalArr = [];

  //base case to check when the original arr is empty
  if (arr.length === 0) return capitalArr;

  //gets first item in origial arr
  let firstArr = arr[0];

  //captilalize first character from first element in origial arr
  let firstCharCapital = firstArr[0].toUpperCase();

  //remove first character from first element in origial arr
  let newCharStr = firstArr.slice(1);

  //concatenate capitalized first character with the rest of character in first element in original arr
  newArrStr = firstCharCapital + newCharStr;

  //push the newArrString which contains capitalized first char into newArr
  capitalArr.push(newArrStr);

  //remove the first element in an arr
  let newArr = arr.splice(1);

  //call the recursive function again
  return capitalizeFirst(newArr);
}

capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']
