import { mockQuestions } from '../src/utils/testModule.js';
import InputView from '../src/view/InputView.js';
import { ERROR_MESSAGE } from '../src/data/messages.js';

describe('입력 테스트', () => {
  let inputView;

  beforeEach(() => {
    inputView = new InputView();
  });

  test('로또 구매 금액은 1,000원 단위의 정수로 입력받는다.', async () => {
    const inputs = ['1000', '2000', '300000000000'];
    const results = [1000, 2000, 300000000000];

    mockQuestions([...inputs]);
    const promise = Promise.all(inputs.map(() => inputView.getPurChaseAmount()));

    await expect(promise).resolves.toEqual(results);
  });

  test('1,000원으로 나누어 떨어지지 않으면 에러를 발생시킨다.', async () => {
    const inputs = ['1001', '2001', '3001'];

    mockQuestions([...inputs]);

    const promise = Promise.all(inputs.map(() => inputView.getPurChaseAmount()));

    await expect(promise).rejects.toThrow(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
  });
});
