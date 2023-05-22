function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  //this gets the max digit for each element in the array
  let maxDigitCount = mostDigits(nums);
  //loop untill max digit of the highest element in the array for instance maxDigitCount is 4 (5467) so i < 3 since we are starting our i as 0
  for (let k = 0; k < maxDigitCount; k++) {
    //create arrays inside an array with length of 10 as our bucket container
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      //we want to get the last digit for each element in the array
      let digit = getDigit(nums[i], k);
      //pushing each element in the array to respective bucket array with the position being thier last digit number
      digitBuckets[digit].push(nums[i]);
    }
    //flatten the array because your remember our digit buckets looks like this [[],[],[]...]
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

// radixSort([23,345,5467,12]);
// mostDigits([123,567,8888,0,7]);
// digitCount(6999);
// getDigit(23, 0);
