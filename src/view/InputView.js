import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, SYSTEM_MESSAGE } from '../data/messages.js';
import { REGEX } from '../data/regex.js';

export default class InputView {
  async inputPurChaseAmount() {
    const purchaseAmount = await this.#readLineAsync(SYSTEM_MESSAGE.INPUT_PURCHASE_AMOUNT);

    if (!REGEX.ONLY_NUMBER.test(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
    }

    if (purchaseAmount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
    }

    return Number(purchaseAmount);
  }

  async inputWinningNumbers() {
    const winningNumbers = await this.#readLineAsync(SYSTEM_MESSAGE.INPUT_WINNING_NUMBERS);

    if (!REGEX.ONLY_NUMBER_AND_COMMA.test(winningNumbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS);
    }

    const numbers = winningNumbers.split(',').map((number) => Number(number));

    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS);
    }

    return numbers;
  }

  async #readLineAsync(prompt) {
    return Console.readLineAsync(prompt);
  }
}
