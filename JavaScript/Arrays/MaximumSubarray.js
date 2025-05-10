// 1.BruteForce approach (o(n^2))
var maxSubArray = function(nums) {
    let max = -Infinity
   for(let i=0;i<nums.length;i++){
    let currentSum = 0
    for(let j=i;j<nums.length;j++){
        currentSum+=nums[j]
        max = Math.max(max,currentSum)
    }
   }
   return max
};

// 2, Kadane's algorithm (O(n))
var maxSubArray = function(nums) {
    let max = -Infinity
    let currentSum = 0
    for(let i=0;i<nums.length;i++){
        currentSum+=nums[i]
        max = Math.max(max,currentSum)
        if(currentSum<0){
            currentSum = 0
        }
    }
    return max
};