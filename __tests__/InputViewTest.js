import { mockQuestions } from '../src/utils/testModule.js';
import InputView from '../src/view/InputView.js';

describe('입력 테스트', () => {
  let inputView;

  beforeEach(() => {
    inputView = new InputView();
  });

  test('로또 구매 금액은 1,000원 단위의 정수로 입력받는다.', async () => {
    const inputs = ['1000', '2000', '300000000000'];
    const results = [1000, 2000, 300000000000];

    mockQuestions([...inputs]);

    await Promise.all(
      inputs.map((_, index) =>
        expect(inputView.inputPurChaseAmount()).resolves.toEqual(results[index])
      )
    );
  });

  test('1,000원으로 나누어 떨어지지 않으면 에러를 발생시킨다.', async () => {
    const inputs = ['1001', '2001', '3001', '100', '1e3'];

    mockQuestions([...inputs]);

    await Promise.all(
      inputs.map(() => expect(inputView.inputPurChaseAmount()).rejects.toThrow('[ERROR]'))
    );
  });

  test('당첨 번호는 1~45 사이의 중복되지 않는 6개의 숫자로 구성되어야 한다.', async () => {
    const inputs = [
      '1,2,3,4,5,5',
      '1,2,3,4,5',
      '1,2,3,4,5,6,7',
      '0,1,2,3,4,5',
      '1,2,3,4,5,46',
      '1,2,3,4,5,a',
      '1.1,2,3,4,5,6',
      '1-2/3;4"5[6',
      '1,1e2,3,4,5,6',
    ];

    mockQuestions([...inputs]);

    await Promise.all(
      inputs.map(() => expect(inputView.inputWinningNumbers()).rejects.toThrow('[ERROR]'))
    );
  });

  test('보너스 번호는 당첨 번호와 중복되지 않는 1~45 사이의 숫자로 구성되어야 한다.', async () => {
    const winningNumbers = ['1,2,3,4,5,6'];
    const inputs = ['1', '2', '3', '4', '5', '6', '1.1', '1e2', 'a', '', '0', '46', '@'];

    mockQuestions([...winningNumbers]);

    await Promise.all(
      inputs.map(() => expect(inputView.inputBonusNumber()).rejects.toThrow('[ERROR]'))
    );
  });
});
