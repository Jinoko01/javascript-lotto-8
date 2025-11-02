import { Console } from '@woowacourse/mission-utils';
import { SYSTEM_MESSAGE } from '../data/messages.js';
import {
  validateBonusNumberInputString,
  validateBonusNumberRange,
  validatePurchaseAmount,
  validateWinningNumbersDuplicated,
  validateWinningNumbersInputString,
} from '../validation/inputValidation.js';

export default class InputView {
  async inputPurChaseAmount() {
    const purchaseAmount = await this.#readLineAsync(SYSTEM_MESSAGE.INPUT_PURCHASE_AMOUNT);

    validatePurchaseAmount(purchaseAmount);

    return Number(purchaseAmount);
  }

  async inputWinningNumbers() {
    const winningNumbers = await this.#readLineAsync(SYSTEM_MESSAGE.INPUT_WINNING_NUMBERS);
    validateWinningNumbersInputString(winningNumbers);

    const numbers = winningNumbers.split(',').map((number) => Number(number));
    validateWinningNumbersDuplicated(numbers);

    return numbers;
  }

  async inputBonusNumber(winningNumbers) {
    const _bonusNumber = await this.#readLineAsync(SYSTEM_MESSAGE.INPUT_BONUS_NUMBER);
    validateBonusNumberInputString(_bonusNumber);

    const bonusNumber = Number(_bonusNumber);
    validateBonusNumberRange(bonusNumber, winningNumbers);

    return bonusNumber;
  }

  async #readLineAsync(prompt) {
    return Console.readLineAsync(prompt);
  }
}
