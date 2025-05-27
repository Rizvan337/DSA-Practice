202. Happy Number
🔗 [Problem Link](https://leetcode.com/problems/happy-number/)

🧠 Logic
Starting with a number n, replace it by the sum of the squares of its digits.

Repeat the process until:

The number becomes 1 (then n is happy), or

The process enters a cycle (detected by repeated numbers) — then n is not happy.

### 💡 Code
Using a Hash Set to detect cycles → O(log n) time.

var isHappy = function(n) {
    let set = new Set()
    while(n!==1 && !set.has(n)){
        set.add(n)
        n = n.toString().split('').map(a=>a*a).reduce((acc,curr)=>acc+curr,0)
    }
    return n===1
};
