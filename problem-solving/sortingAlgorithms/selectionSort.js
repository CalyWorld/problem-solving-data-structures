function selectionSort(arr){

    // i is used to get the first position index
    for(let i = 0; i<arr.length; i++){

        //our lowest number position index
        let lowestNum = i;

        //we loop through the array to find the smallest number position index
        for(let j = i+1; j<arr.length; j++){
            //check if the next index is less than the current index
            // yes, we reassign our lowest number position index
            if(arr[j] < arr[lowestNum]){
                lowestNum = j;
            }
        }
        //when the loop has been completed,
        //pass the arr with the current i iteration and lowest number position index to modify original array
        swap(arr, i, lowestNum);
    }

    //when the outerloop is done, return arr
    return arr;
}

function swap(arr, i, lowestNum){
    //temp value
    let temp;

    //store the current index position of i in temp value
    temp = arr[i];   

    //reassign our lowest value in the arr to be at our current position of i at every iteration
    arr[i] = arr[lowestNum];

    //array is modified with the lowestNumber at the current i position every iteration at i =  0,1,2,3,4
    arr[lowestNum] = temp;
}


selectionSort([2,5,1,7,8,0,9]);