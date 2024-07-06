// Find the missing number in a unsorted
// array whose value is upto n. Where n is the length of the array
const findMissingNumber = (arr, n) => {
    let len = arr.length;
    const lastNum = n;
    let sum = 0;
    let expectedSum = 0;
    let missingNum = 0;
    for(let i = 0; i < len; i++){
        sum += arr[i];
    }
    expectedSum = (lastNum * (lastNum + 1)) / 2;
    missingNum = expectedSum - sum;
    return missingNum;

}