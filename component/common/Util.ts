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

function getFormattingDuration(
  from: DateTime,
  to: DateTime = DateTime.local(),
  locale: 'en' | 'ko' = 'en',
) {
  const log = debug('Util:getFormattingDuration');

  // 햇수 계산을 위해 month에 1개월 추가
  const diff = to.plus({ month: 1 }).diff(from, ['years', 'months']);

  log(diff.milliseconds, diff.get('years'), diff.get('months'));

  const years = Math.floor(diff.years);
  const months = Math.floor(diff.months);

  if (locale === 'ko') {
    // 한국어 포맷
    if (years > 0 && months === 0) {
      return `${years} 년`;
    }
    if (years === 0 && months > 0) {
      return `${months} 개월`;
    }
    return `${years} 년 ${months} 개월`;
  }

  // 영어 포맷 (복수형 처리)
  const yearText = years === 1 ? 'Year' : 'Years';
  const monthText = months === 1 ? 'Month' : 'Months';

  // 기간 포맷 결정
  if (years > 0 && months === 0) {
    return `${years} ${yearText}`;
  }
  if (years === 0 && months > 0) {
    return `${months} ${monthText}`;
  }
  return `${years} ${yearText} ${months} ${monthText}`;
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
