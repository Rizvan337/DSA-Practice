// 1.Brute Force Approach (o(n^2))

var containsDuplicate = function(nums) {
for(let i=0;i<nums.length;i++){
       for(let j=i+1;j<nums.length;j++){
        if(nums[i]===nums[j]){
            return true
        }
       }
    }
    return false
}
// 2.Hash map Approach (o(n))

    var containsDuplicate = function(nums) {
        let hashMap = new Map()
        for(let num of nums){
            let count = hashMap.get(num)||0
            hashMap.set(num,count+1)
        }
        for(let [key,value] of hashMap){
            if(value>1){
                return true
            }
        }
         return false
    };


    // 3.Hash Set Approach (o(n))

    var containsDuplicate = function(nums) {
    let set = new Set()
    for(let num of nums){
        if(!set.has(num)){
            set.add(num)
        }else{
            return true
        }
    }
    return false
};