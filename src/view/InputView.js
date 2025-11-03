import { Console } from '@woowacourse/mission-utils';
import { SYSTEM_MESSAGE } from '../data/messages.js';
import InputValidation from '../validation/inputValidation.js';

export default class InputView {
  constructor(validator) {
    this.validation = validator;
  }
  async inputPurChaseAmount() {
    const purchaseAmount = await this.#readLineAsync(SYSTEM_MESSAGE.INPUT_PURCHASE_AMOUNT);

    this.validation.validatePurchaseAmount(purchaseAmount);

    return Number(purchaseAmount);
  }

  async inputWinningNumbers() {
    const winningNumbers = await this.#readLineAsync(SYSTEM_MESSAGE.INPUT_WINNING_NUMBERS);
    this.validation.validateWinningNumbersInputString(winningNumbers);

    const numbers = winningNumbers.split(',').map((number) => Number(number));
    this.validation.validateWinningNumbersDuplicated(numbers);

    return numbers;
  }

  async inputBonusNumber(winningNumbers) {
    const _bonusNumber = await this.#readLineAsync(SYSTEM_MESSAGE.INPUT_BONUS_NUMBER);
    this.validation.validateBonusNumberInputString(_bonusNumber);

    const bonusNumber = Number(_bonusNumber);
    this.validation.validateBonusNumberRange(bonusNumber, winningNumbers);

    return bonusNumber;
  }

  async #readLineAsync(prompt) {
    return Console.readLineAsync(prompt);
  }
}
