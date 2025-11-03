import { Console } from '@woowacourse/mission-utils';
import { SYSTEM_MESSAGE } from '../data/messages.js';

export default class InputView {
  constructor(validator) {
    this.validation = validator;
  }

  async inputPurChaseAmount() {
    try {
      const purchaseAmount = await this.#readLineAsync(SYSTEM_MESSAGE.INPUT_PURCHASE_AMOUNT);
      this.validation.validatePurchaseAmount(purchaseAmount, this.inputPurChaseAmount);
      return Number(purchaseAmount);
    } catch (error) {
      Console.print(error.message);
      return await this.inputPurChaseAmount();
    }
  }

  async inputWinningNumbers() {
    try {
      const winningNumbers = await this.#readLineAsync(SYSTEM_MESSAGE.INPUT_WINNING_NUMBERS);
      this.validation.validateWinningNumbersInputString(winningNumbers, this.inputWinningNumbers);
      const numbers = winningNumbers.split(',').map((number) => Number(number));
      this.validation.validateWinningNumbersDuplicated(numbers, this.inputWinningNumbers);
      return numbers;
    } catch (error) {
      Console.print(error.message);
      return await this.inputWinningNumbers();
    }
  }

  async inputBonusNumber(winningNumbers) {
    try {
      const _bonusNumber = await this.#readLineAsync(SYSTEM_MESSAGE.INPUT_BONUS_NUMBER);
      this.validation.validateBonusNumberInputString(_bonusNumber, this.inputBonusNumber);
      const bonusNumber = Number(_bonusNumber);
      this.validation.validateBonusNumberRange(bonusNumber, winningNumbers, this.inputBonusNumber);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
      return await this.inputBonusNumber(winningNumbers);
    }
  }

  async #readLineAsync(prompt) {
    return Console.readLineAsync(prompt);
  }
}
