import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import { LOTTO } from '../data/constants.js';

export default class LottoFactory {
  createLottos(count) {
    return Array.from({ length: count }, () => this.createLotto());
  }

  createLotto() {
    return new Lotto(
      Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.COUNT)
    ).getNumbers();
  }
}
