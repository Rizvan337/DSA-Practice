## 217. Contains Duplicate

🔗 [Problem Link](https://leetcode.com/problems/contains-duplicate/description/)

---

### 🧠 Logic

- We need to check if any value appears at least twice in the array.
- Use two approaches:
  - Brute Force: check all pairs → O(n²)
  - Hash Set: track seen numbers → O(n)
---

### 💡 Code

#### 🔹 Brute Force (O(n²)) Not recommended

```js
vvar containsDuplicate = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};



####🔹 Hash Map (O(n))  
var containsDuplicate = function(nums) {
    let hashMap = new Map()
    for(let num of nums){
        let count = hashMap.get(num)||0
        hashMap.set(num,count+1)
    }
    for(let [key,value] of hashMap){
        if(value>1){
            return true
        }
    }
     return false
}

## Hash Set (O(n))  Recommended

var containsDuplicate = function(nums) {
    let set = new Set()
    for(let num of nums){
        if(!set.has(num)){
            set.add(num)
        }else{
            return true
        }
    }
    return false
};