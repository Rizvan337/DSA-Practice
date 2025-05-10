## 53. Maximum Subarray

🔗 [Problem Link](https://leetcode.com/problems/maximum-subarray/description/)

---

### 🧠 Logic

- We need to find Given an integer array nums, find the subarray with the largest sum, and return its sum.

- Use two approaches:
  - Brute force: check all pairs (O(n²))
  - Kadane's Algorithm (O(n))

---

### 💡 Code

#### 🔹 Brute Force (O(n²))
Check all possible subarrays and calculate their sums, keeping track of the maximum.
```js

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

####🔹 Kadane's algorithm (O(n)): Optimal Approach
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


💡 Kadane's Algorithm – Intuition
We keep a running sum (currentSum) while traversing the array.

If currentSum becomes negative, we reset to 0, because a negative sum will only reduce the potential of future subarrays.
We continuously track the max sum seen so far.

"If the positive subarray becomes smaller than the upcoming negative value, the currentSum will eventually turn negative — in that case, it's better to reset and start a new subarray."



📊 Dry Run Example
Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: The subarray [4, -1, 2, 1] has the largest sum = 6.

✅ Edge Cases
All negative numbers: Kadane still works.
Input: [-1, -2, -3] → Output: -1

Single element: Kadane works correctly for single-element arrays.




