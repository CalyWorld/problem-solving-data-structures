//use frequency counter problem solving
//accepts two integers, converts them to string to be able to iterate them and store them in objects
// gets the keys and key pair values which would be number of times they appeared while looping
// checks if the keys are the same in both numbers
//checks if key pair values are less or greater for each
function sameFrequency(num1, num2){
    let num1Holder = {};
    let num2Holder = {};   
    for(let num of num1.toString()){
        if(num1Holder[num]>0){
            num1Holder[num]++;
        }else{
            num1Holder[num] = 1;
        }
    }
     for(let num of num2.toString()){
        if(num2Holder[num]>0){
            num2Holder[num]++;
        }else{
            num2Holder[num] = 1;
        }
    }
    for(let key in num1Holder){
        if(!(key in num2Holder)){
            return false;
        }
        if(num1Holder[key] !== num2Holder[key]){
            return false;
        }
    }
    // console.log(num1Holder, num2Holder);
    return true;
}


// sameFrequency(182, 281); //true
// sameFrequency(34, 14);  //false
// sameFrequency(3589578, 5879385); //true
// sameFrequency(22, 222);  //false
