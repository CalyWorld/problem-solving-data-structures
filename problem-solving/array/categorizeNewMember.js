//categorize members solved using pointer system.
//takes in an array
// senior member must be atleast 55 years old and handicap greater than 7
// handicap range is from -2 to +26
// the data contains info of persons age and handicap
// get the array data inside the data array and push to currentVal which is our array
// get current which is the first number in currentVal array, next is the second number
// check if current number is greater than or 55 and also the next which is the handicapp is greater than 7
// if yes, remove the current number and the number after it with splice method and replace them with string "Senior"
// if no, do the same but this time replace it with the string "Open"
// current is incremented and the loop continues


function openOrSenior(data) {
  let currentVal = [];

  for (let val of data) {
    for (let value of val) {
      currentVal.push(value);
    }
  }

  for (let current = 0; current < currentVal.length; current++) {
    let next = current + 1;
    if (currentVal[current] >= 55 && currentVal[next] > 7) {
      currentVal.splice(current, 2, "Senior");
    } else {
      currentVal.splice(current, 2, "Open");
    }
  }
  return currentVal;
}

// openOrSenior([
//   [18, 20],
//   [45, 2],
//   [61, 12],
//   [37, 6],
//   [21, 21],
//   [78, 9],
// ]);
// ["Open", "Open", "Senior", "Open", "Open", "Senior"];
// openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]);
// ['Open', 'Senior', 'Open', 'Senior'])
// openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]);
// ['Open', 'Open', 'Open', 'Open'])
// openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]);
// ['Senior', 'Open', 'Open', 'Open'])
// openOrSenior([[47,8],[70,10],[69,21],[61,25]]);
// openOrSenior( [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])
