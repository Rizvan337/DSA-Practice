## 344. Reverse String

🔗 [Problem Link](https://leetcode.com/problems/reverse-string/description/)

---

### 🧠 Logic

- We are given a character array s.

- The task is to reverse the characters in the array in-place.

- This means:

- You cannot return a new array.

- You must modify the input array directly.

---

### 💡 Code

#### 🔹 Two-Pointer Approach (O(n))

```js

var reverseString = function(s) {
    let end = s.length-1
    for(let i=0;i<Math.floor(s.length/2);i++){
        let temp = s[i]
        s[i] = s[end]
        s[end] = temp
        end--
    }
};


2.#### 🔹 Using Built-in reverse() Method 
- Time Complexity:(O(n))

var reverseString = function(s) {
  s.reverse(); 
};