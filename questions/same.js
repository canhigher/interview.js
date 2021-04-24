// define a function called "same" which accepts two array. the func should return true if every value in the first array has it's corresponding 
// value squared in the second array. the freq must be the same.
// [1,2,3,4,5], [1,4,9,16,25] => true
// [1,2,2,2,3,2,4], [1,4,9,16,4,4,4] => true
// [2,1,3,2,1,2], [4,4,1,9] => false

function same(arr1, arr2) {
    if (arr1.length != arr2.length){
        return false
    }

    let freq_arr1 = {};
    let freq_arr2 = {};

    for (let key of arr1) {
        freq_arr1[key] = (freq_arr1[key] || 0) + 1 
    }
    for (let key of arr2) {
        freq_arr2[key] = (freq_arr2[key] || 0) + 1 
    }

    for (let key in freq_arr1) {
        if (!(key**2 in freq_arr2)){
            return false
        }
        if (freq_arr1[key] != freq_arr2[key**2]){
            return false
        }
    }
    return true
}

let res = same([1,2,2,2,3,2,4], [1,4,9,16,4,4,4])
console.log(res);