function sumZero(arr) {
    let ptr1 = 0;
    let ptr2 = (arr.length) - 1;
    for(let i = 0; i < arr.length; i++ ){
        let result = arr[ptr1] - arr[ptr2] ;
        if (result == 0){
            return [arr[ptr1], arr[ptr2]]
        }
        result > 0 ? ptr1 += 1 : ptr2 -= 1
    }
}

let res = sumZero([-2,-1,1,2,3]);
console.log(res);
