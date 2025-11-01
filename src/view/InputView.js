import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, SYSTEM_MESSAGE } from '../data/messages.js';
import { REGEX } from '../data/regex.js';

export default class InputView {
  async getPurChaseAmount() {
    const purchaseAmount = await this.#readLineAsync(SYSTEM_MESSAGE.INPUT_PURCHASE_AMOUNT);

    if (!REGEX.ONLY_NUMBER.test(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
    }

    if (purchaseAmount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
    }

    return Number(purchaseAmount);
  }

  async #readLineAsync(prompt) {
    return Console.readLineAsync(prompt);
  }
}
