## 3. Longest Substring Without Repeating Characters

🔗 [Problem Link](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

---

### 🧠 Problem Statement

Given a string s, find the length of the longest substring without repeating characters.

## Approach Sliding Window (O(n))
- Use a Set to track characters in the current window.

- Move right to expand the window.

- If a duplicate is found, move left to shrink the window until it's valid again.

- Update the max length whenever the window is valid.

### 💡 Code

var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let left = 0
    let right = 0
    let longestSubStr = 0
    while(right<s.length){
        let letter = s[right]
        if(!set.has(letter)){
            set.add(letter)
            longestSubStr = Math.max(longestSubStr,set.size)
            right++
        }else{
            set.delete(s[left])
            left++
        }
    }
    return longestSubStr
};