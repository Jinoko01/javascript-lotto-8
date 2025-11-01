import LottoFactory from '../src/model/LottoFactory.js';

describe('LottoFactory 테스트', () => {
  let lottoFactory;

  beforeEach(() => {
    lottoFactory = new LottoFactory();
  });

  test('로또를 특정 개수만큼 생성한다.', () => {
    const input = [1, 5, 10, 100];

    const lottoLists = input.map((input) => lottoFactory.createLottos(input));

    lottoLists.forEach((lottoList, index) => {
      expect(lottoList.length).toBe(input[index]);
    });
  });
});
