import WinningChecker from '../src/service/WinningChecker.js';

describe('WinningChecker 테스트', () => {
  let winningChecker;

  beforeEach(() => {
    winningChecker = new WinningChecker();
  });

  test('로또와 당첨번호, 보너스번호를 비교하여 맞춘 개수를 반환한다.', () => {
    const lottoList = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const winningNumbers = [1, 8, 11, 31, 41, 42];
    const bonusNumber = 43;

    const result = winningChecker.checkWinning(lottoList, winningNumbers, bonusNumber);

    expect(result).toEqual([
      { winningCount: 3, bonusCount: 1 },
      { winningCount: 1, bonusCount: 0 },
      { winningCount: 1, bonusCount: 0 },
      { winningCount: 6, bonusCount: 0 },
      { winningCount: 1, bonusCount: 0 },
      { winningCount: 2, bonusCount: 1 },
      { winningCount: 0, bonusCount: 0 },
      { winningCount: 1, bonusCount: 0 },
    ]);
  });
});
