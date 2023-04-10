function naiveSearch(long, short) {
  //assign count variable to count match
  let count = 0;
  //loop through long string
  for (let i = 0; i < long.length; i++) {
    //loop through short string
    for (let j = 0; j < short.length; j++) {
      //check if the short index element is the same with long index element as we are looping through long string i
      // if not, break
      // short[j] !== long[i+j]
      // j = 0; i = 0;
      // ist iteration - short[0] !== long[0+0]
      //second iteration - short[1] !== long[0+1] break out of short loop and increment i
      if (short[j] !== long[i + j]) break;

      //check if there is a pattern by reaching the end of the short string then increment
      // j = 2 and (short.length -1 = (3-1) = 2)
      if (j === short.length - 1) count++;
    }
  }
  //return count after looping is done
  return count;
}

naiveSearch("lorie loled", "lol");
// lol
