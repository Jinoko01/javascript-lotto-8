import { LOTTO } from '../data/constants.js';

export default class PurchaseLottoController {
  constructor(inputView, outputView, lottoFactory) {
    this.inputView = inputView;
    this.outputView = outputView;
    this.lottoFactory = lottoFactory;
  }

  async purchaseLotto() {
    const purchaseAmount = await this.inputView.inputPurChaseAmount();
    const lottoCount = purchaseAmount / LOTTO.AMOUNT;
    const lottoList = this.lottoFactory.createLottos(lottoCount);
    this.outputView.printLottos(lottoList);
    return { purchaseAmount, lottoList };
  }
}
