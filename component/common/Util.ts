import { DateTime } from 'luxon';
import _debug from 'debug';

enum LUXON_DATE_FORMAT {
  YYYY_LL_DD = 'yyyy-LL-dd',
  YYYY_LL = 'yyyy-LL',
  YYYY_DOT_LL = 'yyyy. LL',
  YYYY_DOT_LL_DOT_DD = 'yyyy. LL. dd',
  KINDNESS_FULL = 'DDDD',

  DURATION_KINDNESS = "y'Y' M'M'",
  DURATION_KINDNESS_ONLY_MONTH = "M'M'",
  DURATION_KINDNESS_ONLY_YEAR = "y'Y'",
}

function getFormattingDuration(from: DateTime, to: DateTime = DateTime.local()) {
  const log = debug('Util:getFormattingDuration');

  // 햇수 계산을 위해 month에 1개월 추가
  const diff = to.plus({ month: 1 }).diff(from, ['years', 'months']);

  log(diff.milliseconds, diff.get('years'), diff.get('months'));

  const years = Math.floor(diff.years);
  const months = Math.floor(diff.months);

  // 복수형 처리
  const yearText = years === 1 ? 'Year' : 'Years';
  const monthText = months === 1 ? 'Month' : 'Months';

  // 기간 포맷 결정
  if (years > 0 && months === 0) {
    return `${years} ${yearText}`;
  } else if (years === 0 && months > 0) {
    return `${months} ${monthText}`;
  } else {
    return `${years} ${yearText} ${months} ${monthText}`;
  }
}

function debug(channel: string) {
  return _debug(`resume:${channel}`);
}

const Util = {
  LUXON_DATE_FORMAT,
  getFormattingDuration,
  debug,
};

export default Util;
