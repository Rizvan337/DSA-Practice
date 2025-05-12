// 1.BruteForce approach (o(n^2))
var maxProfit = function(prices) {
    let max = 0
    let maxProfit = 0
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            if(prices[i]<prices[j]){
                max = prices[j]-prices[i]
                maxProfit = Math.max(max,maxProfit)
            }
        }
    }
    return maxProfit
};

//2.✅ Best Approach: One-Pass (Greedy Approach)
// Time Complexity: O(n)
// Space Complexity: O(1)

var maxProfit = function(prices) {
    let profit = 0
    let maxProfit = 0
    let min = Infinity
   for(let i=0;i<prices.length;i++){
    if(prices[i]<min){
        min = prices[i]
    }
    profit = prices[i]-min
    if(profit>maxProfit){
        maxProfit = profit
    }
   }
   return maxProfit
};