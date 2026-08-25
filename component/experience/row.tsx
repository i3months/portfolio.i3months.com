import { Badge } from 'reactstrap';

import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { IExperience } from './IExperience';
import { TechChipList } from '../common/TechChip';
import { PeriodText, ROW_CHIP_LIMIT } from '../common/CommonRow';
import Util from '../common/Util';

type PositionWithDates = IExperience.Position & {
  startedAtDate: DateTime;
  endedAtDate: DateTime | null;
  isCurrent: boolean;
};

export default function ExperienceRow({
  item,
  index,
  durationLocale,
}: PropsWithChildren<{
  item: IExperience.Item;
  index: number;
  durationLocale?: 'en' | 'ko';
}>) {
  const locale = durationLocale || 'en';
  const presentLabel = locale === 'ko' ? '현재' : 'Present';

  const positionsWithDates: PositionWithDates[] = item.positions.map((position) => ({
    ...position,
    startedAtDate: DateTime.fromFormat(position.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL),
    endedAtDate: position.endedAt
      ? DateTime.fromFormat(position.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
      : null,
    isCurrent: !position.endedAt,
  }));

  const sortedPositions = positionsWithDates
    .slice()
    .sort((a, b) => b.startedAtDate.toMillis() - a.startedAtDate.toMillis());

  const minStartedAt = DateTime.min(...sortedPositions.map((position) => position.startedAtDate));
  const isCurrentlyEmployed = sortedPositions.some((position) => position.isCurrent);

  function hasEndedAtDate(
    position: PositionWithDates,
  ): position is PositionWithDates & { endedAtDate: DateTime } {
    return position.endedAtDate !== null;
  }

  const endedAtDates = sortedPositions
    .filter(hasEndedAtDate)
    .map((position) => position.endedAtDate);

  let maxEndedAt: DateTime;
  if (isCurrentlyEmployed) {
    maxEndedAt = DateTime.local();
  } else if (endedAtDates.length > 0) {
    maxEndedAt = DateTime.max(...endedAtDates);
  } else {
    maxEndedAt = DateTime.local();
  }

  const hasMultiplePositions = sortedPositions.length > 1;
  const overallPeriod = createWorkingPeriod(
    minStartedAt,
    isCurrentlyEmployed ? null : maxEndedAt,
    presentLabel,
  );

  return (
    <div>
      {index > 0 && <hr />}
      <div className="resume-row">
        {/* 회사명 · (직책이 하나면 바로 옆에) | 전체 재직 기간 · 배지 */}
        <div className="resume-row-head">
          <div className="resume-row-heading">
            <h3>{item.title}</h3>
            {!hasMultiplePositions && (
              <span className="resume-subtitle">{sortedPositions[0].title}</span>
            )}
          </div>
          <div className="resume-row-period">
            <PeriodText text={overallPeriod} />
            {isCurrentlyEmployed && (
              <Badge color="primary">{locale === 'ko' ? '재직 중' : 'Current'}</Badge>
            )}
            <Badge color="info">
              {Util.getFormattingDuration(minStartedAt, maxEndedAt, locale)}
            </Badge>
          </div>
        </div>

        {/* 각 Position 을 최신 순으로. 직책이 여럿일 때만 직책마다 기간을 따로 단다. */}
        {sortedPositions.map((position, posIndex) => (
          <div key={posIndex.toString()} className="resume-row">
            {hasMultiplePositions && (
              <div className="resume-row-head">
                <span className="resume-subtitle">{position.title}</span>
                <span className="resume-row-period">
                  <PeriodText
                    text={createWorkingPeriod(
                      position.startedAtDate,
                      position.endedAtDate,
                      presentLabel,
                    )}
                  />
                </span>
              </div>
            )}
            {position.skillKeywords && position.skillKeywords.length > 0 && (
              <TechChipList names={position.skillKeywords} size="sm" limit={ROW_CHIP_LIMIT} />
            )}
            <ul className="resume-descriptions">
              {position.descriptions.map((description, descIndex) => (
                <li key={descIndex.toString()}>{description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * "2024. 02 ~ 2025. 03" / "2025. 02 ~ 현재"
 *
 * @description 물결 표기는 `PeriodText` 가 엔대시로 바꿔 그린다. (다른 섹션의 직렬화와 같은 입력 형식)
 */
function createWorkingPeriod(startedAt: DateTime, endedAt: DateTime | null, presentLabel: string) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT.YYYY_DOT_LL;

  if (!endedAt) {
    return `${startedAt.toFormat(DATE_FORMAT)} ~ ${presentLabel}`;
  }

  return `${startedAt.toFormat(DATE_FORMAT)} ~ ${endedAt.toFormat(DATE_FORMAT)}`;
}
