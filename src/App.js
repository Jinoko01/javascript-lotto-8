import { Console } from '@woowacourse/mission-utils';
import LottoFactory from './model/LottoFactory.js';
import ProfitCalculator from './service/ProfitCalculator.js';
import RankDeterminer from './service/RankDeterminer.js';
import WinningChecker from './service/WinningChecker.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import PurchaseLottoController from './controller/PurchaseLottoController.js';
import WinningNumbersController from './controller/WinningNumbersController.js';
import LotteryController from './controller/LotteryController.js';
import InputValidation from './validation/inputValidation.js';

class App {
  constructor() {
    this.inputView = new InputView(new InputValidation());
    this.outputView = new OutputView();
    this.lottoFactory = new LottoFactory();
    this.winningChecker = new WinningChecker();
    this.rankDeterminer = new RankDeterminer();
    this.profitCalculator = new ProfitCalculator();
    this.purchaseLottoController = new PurchaseLottoController(
      this.inputView,
      this.outputView,
      this.lottoFactory
    );
    this.winningNumbersController = new WinningNumbersController(
      this.inputView,
      this.winningChecker
    );
    this.lotteryController = new LotteryController(
      this.outputView,
      this.rankDeterminer,
      this.profitCalculator
    );
  }

  async run() {
    try {
      const { purchaseAmount, lottoList } = await this.purchaseLottoController.purchaseLotto();
      const winningResult = await this.winningNumbersController.inputWinningNumbers(lottoList);
      this.lotteryController.showResult(winningResult, purchaseAmount);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
