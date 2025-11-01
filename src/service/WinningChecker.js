export default class WinningChecker {
  checkWinning(lottoList, winningNumbers, bonusNumber) {
    return lottoList.map((lotto) => {
      const winningCount = lotto.filter((number) => winningNumbers.includes(number)).length;
      const bonusCount = lotto.filter((number) => number === bonusNumber).length;
      return { winningCount, bonusCount };
    });
  }
}
