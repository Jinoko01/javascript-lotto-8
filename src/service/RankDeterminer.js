export default class RankDeterminer {
  constructor() {
    this.rankInformation = {
      SIX_MATCH: 0,
      FIVE_MATCH_WITH_BONUS: 0,
      FIVE_MATCH: 0,
      FOUR_MATCH: 0,
      THREE_MATCH: 0,
    };
  }

  determineRank(winningResult) {
    winningResult.forEach(({ winningCount, bonusCount }) => {
      const rank = this.getRank(winningCount, bonusCount);

      if (rank !== 'NO_MATCH') {
        this.rankInformation[rank]++;
      }
    });

    return { ...this.rankInformation };
  }

  getRank(winningCount, bonusCount) {
    if (winningCount === 6) {
      return 'SIX_MATCH';
    }

    if (winningCount === 5 && bonusCount === 1) {
      return 'FIVE_MATCH_WITH_BONUS';
    }

    if (winningCount + bonusCount === 5) {
      return 'FIVE_MATCH';
    }

    if (winningCount + bonusCount === 4) {
      return 'FOUR_MATCH';
    }

    if (winningCount + bonusCount === 3) {
      return 'THREE_MATCH';
    }

    return 'NO_MATCH';
  }
}
