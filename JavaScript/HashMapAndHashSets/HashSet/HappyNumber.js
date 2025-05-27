// Hash Set approach
var isHappy = function(n) {
    let set = new Set()
    while(n!==1 && !set.has(n)){
        set.add(n)
        n = n.toString().split('').map(a=>a*a).reduce((acc,curr)=>acc+curr,0)
    }
    return n===1
};