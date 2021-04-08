function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1 
    let middle = Math.floor((left + right) / 2)
    while (arr[middle] !== target && left <= right){
        if(arr[middle] > target){
            right = middle - 1 
        }
        else {
            left = middle + 1 
        }
        middle = Math.floor((left + right) / 2)
    }   
    return arr[middle] === target ? middle : -1
}
let res = binarySearch([1,2,3,4,5,6,7,8],2);
console.log(res);
