import { LOTTO } from './data/constants.js';
import LottoFactory from './model/LottoFactory.js';
import RankDeterminer from './service/RankDeterminer.js';
import WinningChecker from './service/WinningChecker.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
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
  }
}

export default App;
