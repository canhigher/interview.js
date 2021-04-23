var containsDuplicate = function(nums) {
    let mySet = new Set(nums);
    return (mySet.size != nums.length)
};

let res = containsDuplicate([1,1,1,3,3,4,3,2,4,2]);
console.log(res);