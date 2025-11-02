import { LOTTO } from '../data/constants.js';
import { ERROR_MESSAGE } from '../data/messages.js';
import { REGEX } from '../data/regex.js';

export function validatePurchaseAmount(purchaseAmount) {
  if (!REGEX.ONLY_NUMBER.test(purchaseAmount)) {
    throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
  }

  const isDivisible = purchaseAmount % LOTTO.AMOUNT === 0;
  if (!isDivisible) {
    throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
  }
}

export function validateWinningNumbersInputString(winningNumbersString) {
  if (!REGEX.ONLY_NUMBER_AND_COMMA.test(winningNumbersString)) {
    throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS);
  }
}

export function validateWinningNumbersDuplicated(winningNumbersArray) {
  if (new Set(winningNumbersArray).size !== LOTTO.COUNT) {
    throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS);
  }
}

export function validateBonusNumberInputString(bonusNumberString) {
  if (!REGEX.ONLY_NUMBER.test(bonusNumberString)) {
    throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER);
  }
}

export function validateBonusNumberRange(bonusNumber, winningNumbers) {
  const isGraterThanMinNumber = bonusNumber >= LOTTO.MIN_NUMBER;
  const isLessThanMaxNumber = bonusNumber <= LOTTO.MAX_NUMBER;
  const invalidNumberRange = !isGraterThanMinNumber || !isLessThanMaxNumber;

  if (invalidNumberRange) {
    throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER);
  }

  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER);
  }
}
