import { Console } from '@woowacourse/mission-utils';
import { LOTTO } from './data/constants.js';
import LottoFactory from './model/LottoFactory.js';
import ProfitCalculator from './service/ProfitCalculator.js';
import RankDeterminer from './service/RankDeterminer.js';
import WinningChecker from './service/WinningChecker.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    try {
      const inputView = new InputView();
      const outputView = new OutputView();
      const purchaseAmount = await inputView.inputPurChaseAmount();

      const lottoCount = purchaseAmount / LOTTO.AMOUNT;
      const lottoFactory = new LottoFactory();
      const lottoList = lottoFactory.createLottos(lottoCount);
      outputView.printLottos(lottoList);

      const winningNumbers = await inputView.inputWinningNumbers();
      const bonusNumber = await inputView.inputBonusNumber(winningNumbers);

      const winningChecker = new WinningChecker();
      const winningResult = winningChecker.checkWinning(lottoList, winningNumbers, bonusNumber);

      const rankDeterminer = new RankDeterminer();
      const rankInformation = rankDeterminer.determineRank(winningResult);
      outputView.printResult(rankInformation);

      const profitCalculator = new ProfitCalculator();
      const profitRate = profitCalculator.calculateProfitRate(rankInformation, purchaseAmount);
      outputView.printProfit(profitRate);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
