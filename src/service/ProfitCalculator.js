import { REWARD } from '../data/constants.js';

export default class ProfitCalculator {
  calculateProfitRate(rankInformation, purchaseAmount) {
    const profit = this.#getProfit(rankInformation);
    const profitRate = Math.round((profit / purchaseAmount) * 100 * 100) / 100;
    return profitRate;
  }

  #getProfit(rankInformation) {
    let profit = 0;

    Object.entries(rankInformation).forEach(([rank, count]) => {
      profit += count * REWARD[rank];
    });

    return profit;
  }
}
