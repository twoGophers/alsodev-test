// Test 1

function oneTest(arr) {
    if (arr.length === 0) {
        return false;
    }
    
    arr.sort((a, b) => a - b);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            return false;
        }
    }
    
    return true;
};

let arr = [5, 2, 3, 1, 4];
let arr2 = [34, 23, 52, 12, 3];
let arr3 = [7, 6, 5, 5, 3, 4];

console.log(oneTest(arr));
console.log(oneTest(arr2));
console.log(oneTest(arr3));


// Test 2

function twoTest(arr) {
    if (arr.length === 0) {
        return false;
    }

    const uniqueArray = Array.from(new Set(arr));
    const sortedArray = uniqueArray.sort((a, b) => a - b);
    
    return sortedArray;
}

let twoArr1 =  [1, 3, 2, 2, 4, 3, 5, 6, 5];
let twoArr2 =  [9, 9, 9, 9, 9];
let twoArr3 =  [1, 2, 3, 4, 5];

console.log(twoTest(twoArr1));
console.log(twoTest(twoArr2));
console.log(twoTest(twoArr3));

// Test 3 
function threeTest(arr) {
    const countMap = new Map();
    
    for (const num of arr) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }
    }
    
    const result = [];
    countMap.forEach((count, num) => {
        const countObj = {};
        countObj[num] = count;
        result.push(countObj);
    });
    
    return result;
}

let threeArr = [1, 3, 2, 2, 4, 3, 5, 6, 5];
console.log(threeTest(threeArr));