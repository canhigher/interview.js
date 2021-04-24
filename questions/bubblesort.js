function bubbleSort(arr){
    let temp = 0;
    let noSwaps = true;
    for(let i = 0; i < arr.length; i++) {
        noSwaps = true //noSwaps flag used for reduce number of redundant comparison. If there is noSwaps, then everything sorted, its breakable the main loop.
        for(let j = 0; j < arr.length - i; j++){
            console.log(arr, arr[j], arr[j+1]); // step by step through sorting
            if(arr[j] >= arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
        console.log("---"); // each item step 
    }
    return arr
}
let res = bubbleSort([16,12,5,21,2,7,4,9,12])
console.log(res)