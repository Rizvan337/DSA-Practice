121. Best Time to Buy and Sell Stock

🔗 [Problem Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)


### 🧠 Logic

-Given an array prices[] where prices[i] is the stock price on the i-th day.

-We must buy once and sell once later, and return the maximum profit we can get.

-If we can't make any profit (prices only decrease), return 0.

-Use two approaches:

-Brute Force (O(n²))

-Greedy (One-Pass) Optimal Approach (O(n))



### 💡 Code

#### 🔹 Brute Force (O(n²))
Try all pairs: Buy on day i and sell on day j > i, and track the maximum profit.

```js

var maxProfit = function(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] > prices[i]) {
                let profit = prices[j] - prices[i];
                maxProfit = Math.max(maxProfit, profit);
            }
        }
    }
    return maxProfit;
};

####🔹  Greedy (Optimal, One-Pass) – O(n)
Track the minimum price seen so far and update the maximum profit by comparing current price and min.

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


💡 Greedy Approach – Intuition
We look for the lowest price to buy and then the highest price to sell after that.

Instead of checking all pairs, we just keep track of:

The lowest price so far.

The maximum profit if we sold at today’s price.

If today's price is lower than our min, we update the min.

Otherwise, we calculate the profit and update the maxProfit if it’s better.

📊 Dry Run Example
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation:
Buy at 1 (day 1), sell at 6 (day 4) → Profit = 6 - 1 = 5

✅ Edge Cases
If the prices keep decreasing → return 0
Input: [7,6,4,3,1] → Output: 0

One price (not enough to buy & sell) → return 0
Input: [5] → Output: 0


