const knapsack = () => {
  let profit = [0, 1, 2, 5, 6];
  let wight = [0, 2, 3, 4, 5];
  let maxW = 8;
  let n = profit.length;
  let ks = [[], [], [], [], []];

  for (let i = 0; i < n; i++) {
    for (let w = 0; w <= maxW; w++) {
      if (i === 0 || w === 0) {
        k[i][w] = 0;
      } else if (wight[i] <= w) {
        k[i][w] = Math.max(profit[i] + k[i - 1][w - wight[i]], k[i - 1][w]);
      } else {
        k[i][w] = k[i - 1][w];
      }
    }
  }
};
