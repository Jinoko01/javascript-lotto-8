import LottoFactory from './model/LottoFactory.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();
    const purchaseAmount = await inputView.inputPurChaseAmount();

    const lottoCount = purchaseAmount / 1000;
    const lottoFactory = new LottoFactory();
    const lottoList = lottoFactory.createLottos(lottoCount);
    outputView.printLottos(lottoList);

    const winningNumbers = await inputView.inputWinningNumbers();
  }
}

export default App;
