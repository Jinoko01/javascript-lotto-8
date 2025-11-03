import { LOTTO } from '../data/constants.js';
import { ERROR_MESSAGE } from '../data/messages.js';
import { REGEX } from '../data/regex.js';
import LotteryError from '../error/LotteryError.js';

export default class InputValidation {
  validatePurchaseAmount(purchaseAmount, retryInput) {
    if (!REGEX.ONLY_NUMBER.test(purchaseAmount)) {
      throw new LotteryError(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT, retryInput);
    }

    const isDivisible = purchaseAmount % LOTTO.AMOUNT === 0;
    if (!isDivisible) {
      throw new LotteryError(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT, retryInput);
    }
  }

  validateWinningNumbersInputString(winningNumbersString, retryInput) {
    if (!REGEX.ONLY_NUMBER_AND_COMMA.test(winningNumbersString)) {
      throw new LotteryError(ERROR_MESSAGE.INVALID_WINNING_NUMBERS, retryInput);
    }
  }

  validateWinningNumbersDuplicated(winningNumbersArray, retryInput) {
    if (new Set(winningNumbersArray).size !== LOTTO.COUNT) {
      throw new LotteryError(ERROR_MESSAGE.INVALID_WINNING_NUMBERS, retryInput);
    }
  }

  validateBonusNumberInputString(bonusNumberString, retryInput) {
    if (!REGEX.ONLY_NUMBER.test(bonusNumberString)) {
      throw new LotteryError(ERROR_MESSAGE.INVALID_BONUS_NUMBER, retryInput);
    }
  }

  validateBonusNumberRange(bonusNumber, winningNumbers, retryInput) {
    const isGraterThanMinNumber = bonusNumber >= LOTTO.MIN_NUMBER;
    const isLessThanMaxNumber = bonusNumber <= LOTTO.MAX_NUMBER;
    const invalidNumberRange = !isGraterThanMinNumber || !isLessThanMaxNumber;

    if (invalidNumberRange) {
      throw new LotteryError(ERROR_MESSAGE.INVALID_BONUS_NUMBER, retryInput);
    }

    if (winningNumbers.includes(bonusNumber)) {
      throw new LotteryError(ERROR_MESSAGE.INVALID_BONUS_NUMBER, retryInput);
    }
  }
}
