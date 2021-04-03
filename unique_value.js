function sorted_array_unique_values(arr) {
    if(arr.length == 0){
        return 0
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++){
        if(arr[i] != arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1
}


function array_unique_values(arr) {
    let result = {};
    for (let item of arr) {
        result[item] = 1|| 0
    }
    return Object.keys(result).length
}


// let res = sorted_array_unique_values([1,2,3,4,5,6]);
let res = array_unique_values([1,2,3,4,5,6,7]);
console.log(res);