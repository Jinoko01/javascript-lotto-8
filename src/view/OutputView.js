import { Console } from '@woowacourse/mission-utils';
import { SYSTEM_MESSAGE } from '../data/messages.js';

export default class OutputView {
  printLottos(lottoList) {
    const lottoCount = lottoList.length;
    this.#printMessage(SYSTEM_MESSAGE.OUTPUT_PURCHASE_COUNT(lottoCount));
    lottoList.forEach((lotto) => this.#printMessage(`[${lotto.join(', ')}]`));
  }

  printResult(rankInformation) {
    this.#printMessage(SYSTEM_MESSAGE.OUTPUT_RESULT);
    this.#printMessage(`3개 일치 (5,000원) - ${rankInformation.THREE_MATCH}개`);
    this.#printMessage(`4개 일치 (50,000원) - ${rankInformation.FOUR_MATCH}개`);
    this.#printMessage(`5개 일치 (1,500,000원) - ${rankInformation.FIVE_MATCH}개`);
    this.#printMessage(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankInformation.FIVE_MATCH_WITH_BONUS}개`
    );
    this.#printMessage(`6개 일치 (2,000,000,000원) - ${rankInformation.SIX_MATCH}개`);
  }

  #printMessage(message) {
    Console.print(message);
  }
}
