import { Console } from '@woowacourse/mission-utils';
import { SYSTEM_MESSAGE } from '../data/messages.js';

export default class OutputView {
  printLottos(lottoList) {
    const lottoCount = lottoList.length;
    this.#printMessage(SYSTEM_MESSAGE.OUTPUT_PURCHASE_COUNT(lottoCount));
    lottoList.forEach((lotto) => this.#printMessage(`[${lotto.join(', ')}]`));
  }

  #printMessage(message) {
    Console.print(message);
  }
}
