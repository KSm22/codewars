function arrayPlusArray(arr1, arr2) {
    let firstSum = 0;
    let secondSum = 0;
    for (let i = 0; i < arr1.length; i++){
        firstSum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++){
        secondSum += arr2[i];
    }
    return firstSum + secondSum;
}