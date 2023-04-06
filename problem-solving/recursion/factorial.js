function factorial (num) {
    //this is our base
    if(num === 1) return 1;
    //this is our call stack
    return num * factorial(num-1);
}

factorial (5)