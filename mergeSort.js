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

function mergeSort(arr){

    if (arr.length <= 1) return arr;
    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right);
}

let res = mergeSort([5,1,3,7,8,2,9,4,6]);
console.log(res);