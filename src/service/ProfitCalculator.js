import { REWARD } from '../data/constants.js';

export default class ProfitCalculator {
  calculateProfitRate(rankInformation, purchaseAmount) {
    const profit = this.#getProfit(rankInformation);
    return (profit / purchaseAmount) * 100;
  }

  #getProfit(rankInformation) {
    let profit = 0;

    Object.entries(rankInformation).forEach(([rank, count]) => {
      profit += count * REWARD[rank];
    });

    return Math.round(profit * 100) / 100;
  }
}
