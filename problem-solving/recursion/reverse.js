function reverse(str){
    
    let finalStr = "";
    //base case to return finalStr when str length is 0
    if(str.length === 0) return finalStr;

    //gets the last char at end of string
    let lastChar = str[str.length-1];

    //use + operator to add in last char from original str to finalStr
    finalStr += lastChar

    // remove the last character with slice to cut of from first char to second to last character at end of original str
    let newStr = str.slice(0, str.length-1)

    //return finalStr and pass the current arr after slice to function to run recursively
    return finalStr + reverse(newStr);
}

// reverse('awesome') // 'emosewa'

// reverse('rithmschool') // 'loohcsmhtir'