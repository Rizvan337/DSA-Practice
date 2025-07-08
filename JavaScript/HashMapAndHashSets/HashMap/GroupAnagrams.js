// Sorted Key approach.O(n * k log k) 
// Note:There is better approach than this.so this is not the optimal solution.Please check the other solution.
var groupAnagrams = function(strs) {
    let res = {}
    for(let char of strs){
        let key = char.split('').sort().join('')
        if(!res[key]){
            res[key] = []
        }
        res[key].push(char)
    }
    return Object.values(res)
};