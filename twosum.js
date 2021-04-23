var twoSum = function(nums, target) {
    let hashMap = {};
    for(let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = i
    }
    for(let i = 0; i < nums.length; i++) {
        let competent = target - nums[i]; 
        if (hashMap[competent] && hashMap[competent] != i) {
            return[hashMap[competent], i]
        }
    }
};

let res = twoSum([1,2,3,4,5], 9)
console.log(res);