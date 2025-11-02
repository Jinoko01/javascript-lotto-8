import { LOTTO } from '../data/constants.js';

export default class LottoController {
  constructor(
    inputView,
    outputView,
    lottoFactory,
    winningChecker,
    rankDeterminer,
    profitCalculator
  ) {
    this.inputView = inputView;
    this.outputView = outputView;
    this.lottoFactory = lottoFactory;
    this.winningChecker = winningChecker;
    this.rankDeterminer = rankDeterminer;
    this.profitCalculator = profitCalculator;
  }

  async run() {
    const { purchaseAmount, lottoList } = await this.purchaseLotto();
    const winningResult = await this.inputWinningNumbers(lottoList);
    this.showResult(winningResult, purchaseAmount);
  }

  async purchaseLotto() {
    const purchaseAmount = await this.inputView.inputPurChaseAmount();
    const lottoCount = purchaseAmount / LOTTO.AMOUNT;
    const lottoList = this.lottoFactory.createLottos(lottoCount);
    this.outputView.printLottos(lottoList);
    return { purchaseAmount, lottoList };
  }

  async inputWinningNumbers(lottoList) {
    const winningNumbers = await this.inputView.inputWinningNumbers();
    const bonusNumber = await this.inputView.inputBonusNumber(winningNumbers);
    return this.winningChecker.checkWinning(lottoList, winningNumbers, bonusNumber);
  }

  showResult(winningResult, purchaseAmount) {
    const rankInformation = this.rankDeterminer.determineRank(winningResult);
    this.outputView.printResult(rankInformation);
    const profitRate = this.profitCalculator.calculateProfitRate(rankInformation, purchaseAmount);
    this.outputView.printProfit(profitRate);
  }
}
