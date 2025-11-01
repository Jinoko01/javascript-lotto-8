export const SYSTEM_MESSAGE = Object.freeze({
  INPUT_PURCHASE_AMOUNT: '구매금액을 입력해 주세요\n',
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요\n',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요\n',
  OUTPUT_PURCHASE_COUNT: (count) => `${count}개를 구매했습니다.`,
  OUTPUT_RESULT: '당첨 통계\n---',
  OUTPUT_PROFIT: (profit) => `총 수익률은 ${profit}%입니다.`,
});

const ERROR_PREFIX = '[ERROR] ';
export const ERROR_MESSAGE = Object.freeze({
  INVALID_PURCHASE_AMOUNT: `${ERROR_PREFIX}구매금액은 1,000원 단위의 정수로 입력해야 합니다.\n(예시: 5000)`,
  INVALID_NUMBER_COUNT: `${ERROR_PREFIX}로또 번호는 6개여야 합니다.\n(예시: 1,2,3,4,5,6)`,
  INVALID_LOTTO_NUMBERS: `${ERROR_PREFIX}로또 번호는 1~45사이의 중복되지 않는 숫자여야 합니다.\n(예시: 1,10,20,30,40,45)`,
  INVALID_WINNING_NUMBERS: `${ERROR_PREFIX}당첨 번호는 1~45 사이의 중복되지 않는 6개의 숫자로 구성되어야 합니다.\n(예시: 1,2,3,4,5,6)`,
  INVALID_BONUS_NUMBER: `${ERROR_PREFIX}보너스 번호는 1~45 사이의 당첨 번호와 중복되지 않는 1개의 숫자로 구성되어야 합니다.\n(예시: 7)`,
});
