import RankDeterminer from '../src/service/RankDeterminer.js';

describe('RankDeterminer 테스트', () => {
  let rankDeterminer;

  beforeEach(() => {
    rankDeterminer = new RankDeterminer();
  });

  test('당첨 결과를 반환한다.', () => {
    const winningResult = [
      { winningCount: 6, bonusCount: 0 },
      { winningCount: 5, bonusCount: 1 },
      { winningCount: 5, bonusCount: 0 },
      { winningCount: 4, bonusCount: 0 },
      { winningCount: 3, bonusCount: 0 },
    ];
    const result = rankDeterminer.determineRank(winningResult);
    expect(result).toEqual({
      SIX_MATCH: 1,
      FIVE_MATCH_WITH_BONUS: 1,
      FIVE_MATCH: 1,
      FOUR_MATCH: 1,
      THREE_MATCH: 1,
    });
  });
});
