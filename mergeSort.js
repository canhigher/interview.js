function merge(arr1, arr2){
    let arr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            arr.push(arr1[i]);
            i++;
        }
        else {
            arr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        arr.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        arr.push(arr2[j])
        j++;
    }
    return arr
}

let res = merge([1,2,3,7,8,9],[4,5,6]);
console.log(res);