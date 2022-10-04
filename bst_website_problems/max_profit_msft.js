
// brute force approach: O(n^2)

// function solve(prices) {
//   let result = -Infinity;

//   for (let lowIdx = 0; lowIdx < prices.length - 1; lowIdx += 1) {
//     for (let highIdx = lowIdx + 1; highIdx < prices.length; highIdx += 1) {
//       let diff = prices[highIdx] - prices[lowIdx];
//       if (diff > result) {
//         result = diff;
//       }
//     }
//   }

//   return result < 0 ? 0 : result;
// }

// function solve(prices) {
//   let result = -Infinity;

//   for (let index = 0; index < prices.length - 1; index += 1) {
//     let buy = prices[index];
//     let sell = Math.max.apply(null, prices.slice(index + 1)); // extremely expensive!
//     let diff = sell - buy;

//     if (diff > result) {
//       result = diff;
//     }
//   }

//   return result < 0 ? 0 : result;
// }

// function solve(array) {
//   // if (!array || array.length < 2) {
//   //     return 0;
//   // }

//   let currentBuy = array[0];
//   let globalSell = array[1];
//   let globalProfit = globalSell - currentBuy;

//   let currentProfit = 0;

//   for (let i = 1; i < array.length; i++) {
//       currentProfit = array[i] - currentBuy;

//       if (currentProfit > globalProfit) {
//           globalProfit = currentProfit;
//           globalSell = array[i];
//       }

//       if (currentBuy > array[i]) {
//           currentBuy = array[i];
//       }
//   }
//   return globalProfit < 0 ? 0 : globalProfit;
// };

function solve(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price in prices) {
    console.log(price);
      minPrice = Math.min(minPrice, price);
      maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit < 0 ? maxProfit : 0;
}

let prices = [1, 0];
console.log(solve(prices));
























  // const hash = {
  //   low: [Infinity, null],
  //   high: [-Infinity, null],
  // };
    // let max = Math.max(...prices.slice(1, idx + 1));
    // let min = Math.min(...prices.slice(0, idx + 1));
    // console.log(`min: ${min}`);
    // console.log(`max: ${max}`);

    // let curr = prices[idx];
    // if (curr < hash.low[0]) {
    //   hash.low[0] = curr;
    //   hash.low[1] = idx;
    // }
    // if (curr > hash.high[0] && curr > hash.low[0] && idx > hash.low[1]) {
    //   hash.high[0] = curr;
    //   hash.high[1] = idx;
    // }
    //   return hash;