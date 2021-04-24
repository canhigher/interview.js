function mergeArrays(arr1,arr2) {
    let i = 0;
    let j = 0;
    let finalArr = []; 
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            finalArr.push(arr1[i])
            i++;
        }
        else {
            finalArr.push(arr2[j])
            j++;
        }
    }
    if (j < arr2.length) {
        finalArr.push(arr2[j]);
        j++;
    }
    if (i < arr1.length) {
        finalArr.push(arr1[i]);
        i++;
    }
    return finalArr
}

let res = mergeArrays([0,3,4,31],[4,6,30])
console.log(res);