function fibonaaci(num){
    // first and second number is 1 so if num is less than 1 or 2, return 1
    if(num <= 2) return 1;

    return fibonaaci(num-1) + fibonaaci(num-2);
}