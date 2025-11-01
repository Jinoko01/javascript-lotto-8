import { LOTTO } from './data/constants.js';
import { ERROR_MESSAGE } from './data/messages';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateNumberRange(numbers);
    this.#validateNumberCount(numbers);
    this.#validateDuplicatedNumber(numbers);
  }

  #validateNumberRange(numbers) {
    const checkGraterThanMinNumber = (number) => number >= LOTTO.MIN_NUMBER;
    const checkLessThanMaxNumber = (number) => number <= LOTTO.MAX_NUMBER;
    const isNumberRangeValid =
      numbers.every(checkGraterThanMinNumber) && numbers.every(checkLessThanMaxNumber);

    if (!isNumberRangeValid) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBERS);
    }
  }

  #validateNumberCount(numbers) {
    if (numbers.length !== LOTTO.COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_COUNT);
    }
  }

  #validateDuplicatedNumber(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBERS);
    }
  }
}

export default Lotto;
