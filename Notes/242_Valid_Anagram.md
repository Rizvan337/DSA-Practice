## 242. Valid Anagram

🔗 [Problem Link](https://leetcode.com/problems/valid-anagram/description/)

---

### 🧠 Logic

- We need to check if two strings s and t are anagrams of each other.

- Two strings are anagrams if:

- They have the same characters

- The frequency of each character is the same

---

### 💡 Code

#### 🔹 Sorting (O(n log n))

```js

var isAnagram = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
};


