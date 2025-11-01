import { getLogSpy } from '../src/utils/testModule.js';
import OutputView from '../src/view/OutputView.js';

describe('출력 테스트', () => {
  let outputView;

  beforeEach(() => {
    outputView = new OutputView();
  });

  test('구매한 로또 리스트를 출력한다.', async () => {
    const inputs = [
      [8, 21, 23, 41, 42, 43],
      [2, 4, 6, 8, 10, 12],
      [5, 10, 15, 20, 25, 30],
    ];
    const logSpy = getLogSpy();

    outputView.printLottos(inputs);
    const logs = [
      '3개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[2, 4, 6, 8, 10, 12]',
      '[5, 10, 15, 20, 25, 30]',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(log);
    });
  });
});
