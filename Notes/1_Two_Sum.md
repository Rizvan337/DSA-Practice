## 1. Two Sum

🔗 [Problem Link](https://leetcode.com/problems/two-sum/description/)

---

### 🧠 Logic

- We need to find **two numbers** in the array that **add up to the target**.
- Use two approaches:
  - Brute force: check all pairs (O(n²))
  - Hash map: store values as you go (O(n))

---

### 💡 Code

#### 🔹 Brute Force (O(n²))

```js
var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}


####🔹 Hash Map (O(n))
var twoSum = function(nums, target) {
  let map = new Map();
  for(let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if(map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
