export default class WinningNumbersController {
  constructor(inputView, winningChecker) {
    this.inputView = inputView;
    this.winningChecker = winningChecker;
  }

  async inputWinningNumbers(lottoList) {
    const winningNumbers = await this.inputView.inputWinningNumbers();
    const bonusNumber = await this.inputView.inputBonusNumber(winningNumbers);
    return this.winningChecker.checkWinning(lottoList, winningNumbers, bonusNumber);
  }
}
