49. Group Anagrams
🔗 [Problem Link](https://leetcode.com/problems/group-anagrams/description/)

🧠 Logic
Group words that are anagrams of each other by using a sorted version of the word as the key.
All anagrams will have the same sorted characters, so we can group them together in a hash map.

### 💡 Code
Using a Hash Map with sorted string keys → O(n * k log k) time (where n is number of words and k is average word length).

var groupAnagrams = function(strs) {
    let res = {};
    for (let word of strs) {
        let key = word.split('').sort().join('');
        if (!res[key]) {
            res[key] = [];
        }
        res[key].push(word);
    }
    return Object.values(res);
};
