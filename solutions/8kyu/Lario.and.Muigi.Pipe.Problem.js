function pipeFix(numbers){
    let firstItem = numbers[0],
        lastItem = numbers.pop(),
        size = lastItem - firstItem,
        output = new Array();
    for (let i = 0; i <= size; i++){
        output[i] = i + firstItem;
    }
    return output
}