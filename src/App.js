import LottoFactory from './model/LottoFactory.js';
import InputView from './view/InputView.js';

class App {
  async run() {
    const inputView = new InputView();
    const purchaseAmount = await inputView.getPurChaseAmount();
    const lottoCount = purchaseAmount / 1000;
    const lottoFactory = new LottoFactory();
    const lottoList = lottoFactory.createLottos(lottoCount);
  }
}

export default App;
