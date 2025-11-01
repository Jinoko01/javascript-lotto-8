import { getLogSpy } from '../src/utils/testModule.js';
import OutputView from '../src/view/OutputView.js';

describe('출력 테스트', () => {
  let outputView;

  beforeEach(() => {
    outputView = new OutputView();
  });

  test('구매한 로또 리스트를 출력한다.', () => {
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

  test('당첨 결과를 출력한다.', () => {
    const winningResult = {
      SIX_MATCH: 1,
      FIVE_MATCH_WITH_BONUS: 1,
      FIVE_MATCH: 1,
      FOUR_MATCH: 1,
      THREE_MATCH: 1,
    };
    const logSpy = getLogSpy();

    outputView.printResult(winningResult);
    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(log);
    });
  });

  test('수익률을 출력한다.', () => {
    const profitRate = 62.5;
    const logSpy = getLogSpy();

    outputView.printProfit(profitRate);
    expect(logSpy).toHaveBeenCalledWith(`총 수익률은 ${profitRate}%입니다.`);
  });
});
