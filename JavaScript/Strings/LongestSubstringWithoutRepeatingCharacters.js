// 1.Sliding window Approach (O(n))

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