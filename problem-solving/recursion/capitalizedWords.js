function capitalizeWords(arr) {
  if (arr.length === 0) return [];

  let firstArrItem = arr[0];

  let capitalizedItem = firstArrItem.toUpperCase();

  let newArr = arr.slice(1);

  let rest = capitalizeWords(newArr);

  return [capitalizedItem, ...rest];
  // add whatever parameters you deem necessary - good luck!
}

let words = ["i", "am", "learning", "recursion"];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
