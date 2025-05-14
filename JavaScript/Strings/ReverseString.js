// 1.Two-Pointer Approach (O(n))


var reverseString = function(s) {
    let end = s.length-1
    for(let i=0;i<Math.floor(s.length/2);i++){
        let temp = s[i]
        s[i] = s[end]
        s[end] = temp
        end--
    }
};


// 2. Using Built-in reverse() Method (O(n))

var reverseString = function(s) {
  s.reverse(); 
};