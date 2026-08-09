import { Badge, Col, Row } from 'reactstrap';

import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { IExperience } from './IExperience';
import { Style } from '../common/Style';
import { TechChipList } from '../common/TechChip';
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

  const periodTitle = createOverallWorkingPeriod(sortedPositions);
  const hasMultiplePositions = sortedPositions.length > 1;

  return (
    <div>
      {index > 0 && <hr />}
      {/* 최상위 Row: 전체 재직 기간과 회사명 표시 */}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <h3 style={Style.gray}>{periodTitle}</h3>
        </Col>
        <Col sm={12} md={9}>
          <h3 style={{ display: 'inline-flex', alignItems: 'center' }}>
            {item.title}{' '}
            <span style={{ fontSize: '65%', display: 'inline-flex', alignItems: 'center' }}>
              {isCurrentlyEmployed && (
                <Badge color="primary" className="ml-1">
                  {durationLocale === 'ko' ? '재직 중' : 'Current'}
                </Badge>
              )}
              <Badge color="info" className="ml-1">
                {Util.getFormattingDuration(minStartedAt, maxEndedAt, durationLocale || 'en')}
              </Badge>
            </span>
          </h3>
        </Col>
      </Row>

      {/* 각 Position을 최신 순으로 반복하여 개별 재직 기간과 직책 표시 */}
      {sortedPositions.map((position, posIndex) => (
        <Row key={posIndex.toString()} className="mt-1">
          <Col sm={12} md={3} className="text-md-right">
            {/* positions가 1개 이상일 때만 Position의 재직 기간 표시 */}
            {hasMultiplePositions && (
              <span style={Style.gray}>
                {createWorkingPeriod(position.startedAtDate, position.endedAtDate)}
              </span>
            )}
          </Col>
          <Col sm={12} md={9}>
            {/* 한글 이탤릭은 합성되어 가독성이 떨어지므로 색으로만 구분한다. */}
            <div className="resume-subtitle" style={Style.gray}>
              {position.title}
            </div>
            {/* Skill Keywords를 직책명 바로 아래에 표시 */}
            {position.skillKeywords && position.skillKeywords.length > 0 && (
              <TechChipList names={position.skillKeywords} size="sm" className="mt-2 mb-2" />
            )}
            <ul className="pt-2">
              {position.descriptions.map((description, descIndex) => (
                <li key={descIndex.toString()}>{description}</li>
              ))}
            </ul>
          </Col>
        </Row>
      ))}
    </div>
  );
}

function createOverallWorkingPeriod(positions: PositionWithDates[]) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT.YYYY_DOT_LL;
  const startedAt = positions[positions.length - 1].startedAtDate;
  const isCurrentlyEmployed = positions.some((position) => position.isCurrent);

  function hasEndedAtDate(
    position: PositionWithDates,
  ): position is PositionWithDates & { endedAtDate: DateTime } {
    return position.endedAtDate !== null;
  }

  const endedAtDates = positions.filter(hasEndedAtDate).map((position) => position.endedAtDate);

  let endedAt: DateTime;
  if (isCurrentlyEmployed) {
    endedAt = DateTime.local();
  } else if (endedAtDates.length > 0) {
    endedAt = DateTime.max(...endedAtDates);
  } else {
    endedAt = DateTime.local();
  }

  return `${startedAt.toFormat(DATE_FORMAT)} ~ ${endedAt.toFormat(DATE_FORMAT)}`;
}

function createWorkingPeriod(startedAt: DateTime, endedAt?: DateTime | null) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT.YYYY_DOT_LL;

  if (!endedAt) {
    return `${startedAt.toFormat(DATE_FORMAT)} ~`;
  }

  return `${startedAt.toFormat(DATE_FORMAT)} ~ ${endedAt.toFormat(DATE_FORMAT)}`;
}
