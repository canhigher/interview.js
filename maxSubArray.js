// [1,2,3,4,5,6,7,8,9,10] n = 3 => (27) 8-9-10 

function maxSubarraySum(arr,n) {

    if (n > arr.length) {
        return null
    }
    let maxRes = 0; 

    for(let i = 0; i < n; i++){
        maxRes += arr[i]
    }
    let currentRes = maxRes 
    for(let i = n; i < arr.length; i++){
        currentRes = currentRes + arr[i] - arr[i-n]
        if (currentRes > maxRes) {
            maxRes = currentRes
        }
    }
    return maxRes
}

let res = maxSubarraySum([1,2,3,4,5,6,7,8,9,10], 3);
console.log(res);