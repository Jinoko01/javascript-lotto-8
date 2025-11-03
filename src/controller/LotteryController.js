export default class LotteryController {
  constructor(outputView, rankDeterminer, profitCalculator) {
    this.outputView = outputView;
    this.rankDeterminer = rankDeterminer;
    this.profitCalculator = profitCalculator;
  }

  showResult(winningResult, purchaseAmount) {
    const rankInformation = this.rankDeterminer.determineRank(winningResult);
    this.outputView.printResult(rankInformation);
    const profitRate = this.profitCalculator.calculateProfitRate(rankInformation, purchaseAmount);
    this.outputView.printProfit(profitRate);
  }
}
