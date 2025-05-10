// 1. Two Sum - Brute Force
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        }
    }
}




// 2. Two Sum - Hash Map
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        let num2 = target - nums[i]
        if(map.has(num2)){
            return [map.get(num2),i]
        }
        map.set(nums[i],i)
    }
    return []
};