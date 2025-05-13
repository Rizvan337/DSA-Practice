// Sorting (O(n log n))

var isAnagram = function(s, t) {
    let sorts = s.split('').sort().join('')
    let sortt = t.split('').sort().join('')
    return sorts===sortt
 };