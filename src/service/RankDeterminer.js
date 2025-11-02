import { RANK } from '../data/constants.js';
export default class RankDeterminer {
  constructor() {
    this.rankInformation = {
      [RANK.SIX_MATCH]: 0,
      [RANK.FIVE_MATCH_WITH_BONUS]: 0,
      [RANK.FIVE_MATCH]: 0,
      [RANK.FOUR_MATCH]: 0,
      [RANK.THREE_MATCH]: 0,
    };
  }

  determineRank(winningResult) {
    winningResult.forEach(({ winningCount, bonusCount }) => {
      const rank = this.getRank(winningCount, bonusCount);

      if (rank !== RANK.NO_MATCH) {
        this.rankInformation[rank]++;
      }
    });

    return { ...this.rankInformation };
  }

  getRank(winningCount, bonusCount) {
    if (winningCount === 5 && bonusCount === 1) {
      return RANK.FIVE_MATCH_WITH_BONUS;
    }

    const byCount = {
      6: RANK.SIX_MATCH,
      5: RANK.FIVE_MATCH,
      4: RANK.FOUR_MATCH,
      3: RANK.THREE_MATCH,
    };

    const matchCount = winningCount + bonusCount;
    return byCount[matchCount] ?? RANK.NO_MATCH;
  }
}
