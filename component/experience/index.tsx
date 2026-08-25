import { Badge } from 'reactstrap';
import { DateTime, Duration } from 'luxon';

import { PropsWithChildren } from 'react';
import ExperienceRow from './row';
import { IExperience } from './IExperience';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { CommonSection } from '../common/CommonSection';
import Util from '../common/Util';

type Payload = IExperience.Payload;

export const Experience = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const totalPeriod = payload.disableTotalPeriod ? (
    undefined
  ) : (
    <Badge>{getFormattingExperienceTotalDuration(payload)}</Badge>
  );

  return (
    <CommonSection title={payload.title || 'EXPERIENCE'} aside={totalPeriod}>
      {payload.list.map((item, index) => (
        <ExperienceRow
          key={index.toString()}
          item={item}
          index={index}
          durationLocale={payload.durationLocale}
        />
      ))}
    </CommonSection>
  );
}

function getFormattingExperienceTotalDuration(payload: IExperience.Payload) {
  const durations = payload.list.reduce((acc: Duration[], item: IExperience.Item) => {
    const itemDurations = item.positions.map((position: IExperience.Position) => {
      const endedAt = position.endedAt
        ? DateTime.fromFormat(position.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
        : DateTime.local();
      const startedAt = DateTime.fromFormat(position.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL);
      return endedAt.diff(startedAt);
    });
    return acc.concat(itemDurations); // 중첩된 배열 평탄화
  }, []);

  const totalExperience = durations.reduce(
    (prev: Duration, cur: Duration) => prev.plus(cur),
    Duration.fromMillis(0),
  );

  const years = Math.floor(totalExperience.as('years'));
  const months = Math.floor(totalExperience.as('months') % 12);

  const locale = payload.durationLocale || 'en';

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

  if (years > 0 && months === 0) {
    return `${years} ${yearText}`;
  }
  if (years === 0 && months > 0) {
    return `${months} ${monthText}`;
  }
  return `${years} ${yearText} ${months} ${monthText}`;
}
