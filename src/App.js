import { Console } from '@woowacourse/mission-utils';
import LottoFactory from './model/LottoFactory.js';
import ProfitCalculator from './service/ProfitCalculator.js';
import RankDeterminer from './service/RankDeterminer.js';
import WinningChecker from './service/WinningChecker.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import LottoController from './controller/LottoController.js';

class App {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.lottoFactory = new LottoFactory();
    this.winningChecker = new WinningChecker();
    this.rankDeterminer = new RankDeterminer();
    this.profitCalculator = new ProfitCalculator();
    this.lottoController = new LottoController(
      this.inputView,
      this.outputView,
      this.lottoFactory,
      this.winningChecker,
      this.rankDeterminer,
      this.profitCalculator
    );
  }

  async run() {
    try {
      await this.lottoController.run();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
