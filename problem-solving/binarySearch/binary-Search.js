function binarySearch(arr, val){
    //get the first index of array
    let start = 0;
    //get the last index of array
    let end = arr.length-1;
    //get the average  index of the array
    let middle = Math.floor((start + end)/2);
    
    //while loop to check if the middle index element is not equal to the value we are looking for
    //also we prevent infinite looping if the value is not in the array by checking if the start index is less 
    //or equal to the end index
    while(arr[middle] !== val && start <= end){

        //check if the value is less than the middle which is 2, is value < (arr[middle] === 3 < middle) or is value > (arr[middle] === 3) ?
        if(val < arr[middle]){
            //yes, we move our end to 1 since middle is 2 and end = 2-1  
            end = middle - 1;

            //no, we move our start to 3 since middle is 2 and start is 2+1 
        }else if(val > arr[middle]){
            start = middle + 1
        }
        //we reassign middle here to be the avg of ((new start/ new end )/2)
        middle = Math.floor((start + end)/2);
    }
    //stop gap to return when there is a match
     if(arr[middle] === val){
        //returns the index position
         return middle;
     }else{
        //if the value isn't in the array, return -1
         return -1;
     }
}



binarySearch([1,2,3,4,5],50) // 1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([
  // 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  // 40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10) // 2
// binarySearch([
  // 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95) // 16
// // binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100) // -1