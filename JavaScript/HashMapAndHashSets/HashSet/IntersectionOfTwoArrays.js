// 1.Brute Force Approach o(n*m)

var intersection = function(nums1, nums2) {
    let set = new Set()
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]===nums2[j]){
                set.add(nums1[i])
            }
        }
    }
    return Array.from
}

// 2.Using hash set (O(n + m)) 

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