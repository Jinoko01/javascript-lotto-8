import ProfitCalculator from '../src/service/ProfitCalculator.js';

describe('ProfitCalculator 테스트', () => {
  let profitCalculator;

  beforeEach(() => {
    profitCalculator = new ProfitCalculator();
  });

  test('수익률을 계산한다.', () => {
    const purchaseAmount = 8000;
    const rankInformation = {
      SIX_MATCH: 0,
      FIVE_MATCH_WITH_BONUS: 0,
      FIVE_MATCH: 0,
      FOUR_MATCH: 0,
      THREE_MATCH: 1,
    };
    const profitRate = profitCalculator.calculateProfitRate(rankInformation, purchaseAmount);
    expect(profitRate).toBe(62.5);
  });
});
