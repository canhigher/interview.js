var maxProfit = function(prices) {
    let profit = 0;
    let minVal = prices[0];
    for (let i = 1; i < prices.length; i++) {
        minVal = Math.min(minVal, prices[i])
        
        profit = Math.max(profit, prices[i] - minVal)
    }
    
    return profit
};

let res = maxProfit([7,1,5,3,6,4])

console.log(res);