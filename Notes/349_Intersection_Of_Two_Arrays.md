## 349. Intersection of Two Arrays

🔗 [Problem Link](https://leetcode.com/problems/intersection-of-two-arrays/)

---

### 🧠 Logic

- We are given two integer arrays nums1 and nums2.

- The task is to return an array of their intersection, meaning the common elements that appear in both arrays, without duplicates.

- The result can be in any order.

⚠️ Important constraint:

- Return only unique elements in the result.

- Should ideally be done in O(n) time.

---

### 💡 Code

#### 🔹 Brute Force Approach (O(n*m)) (For Learning Only)

```js

var intersection = function(nums1, nums2) {
    let set = new Set()
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]===nums2[j]){
                set.add(nums1[i])
            }
        }
    }
    return Array.from(set)
}


2.#### 🔹Hash Set Approach (O(n + m))

### 💡 Code

var intersection = function(nums1, nums2) {
let set1 = new Set(nums1)
    let set2 = new Set()
    for(let num of nums2){
        if(set1.has(num)){
            set2.add(num)
        }
    }
    return Array.from(set2)
};