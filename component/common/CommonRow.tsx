import { PropsWithChildren } from 'react';
import { IRow } from './IRow';
import { CommonDescription } from './CommonDescription';
import { TechChipList } from './TechChip';

/** 항목당 처음부터 보여주는 기술 칩 개수. 나머지는 "+N" 으로 접는다. */
export const ROW_CHIP_LIMIT = 8;

/**
 * ### 기간 텍스트
 *
 * @description payload 쪽 직렬화가 만든 "2025. 02 ~ 현재" 꼴을 받아
 *              물결을 엔대시로 바꾸고, 끝이 날짜가 아닌 낱말("현재", "Present")이면 강조한다.
 */
export function PeriodText({ text }: PropsWithChildren<{ text: string }>) {
  const [start, end] = text.split('~').map((part) => part.trim());

  if (end === undefined) {
    return <span>{start}</span>;
  }

  const isDate = /^\d{4}\.\s?\d{2}$/.test(end);

  return (
    <span>
      {start} – {isDate || end === '' ? end : <span className="resume-present">{end}</span>}
    </span>
  );
}

export function CommonRows({
  index,
  payload,
}: PropsWithChildren<{ payload: IRow.Payload; index: number }>) {
  const { left, right } = payload;

  /**
   * 오른쪽 제목이 없으면 왼쪽 값이 제목 노릇을 한다. 이때는 레일에 넣을 것이 없다.
   */
  const heading = right.title || left.title;
  const hasRail = !!right.title;

  /**
   * 레일에는 기간("2024. 02 ~ 2025. 03")이 오는 것이 보통이지만,
   * 오픈소스처럼 날짜가 없는 섹션은 역할("Contributor")이 대신 온다.
   * 숫자 폭 고정과 줄바꿈 금지는 날짜에만 맞는 규칙이라 라벨일 때는 푼다.
   */
  const isPeriod = /\d{4}\.\s?\d{2}/.test(left.title);
  const railClass = isPeriod ? 'resume-row-period' : 'resume-row-period resume-row-label';

  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <div className="resume-row">
        <div className="resume-row-head">
          <div className="resume-row-heading">
            <h3>{heading}</h3>
            {/* 한글은 이탤릭이 합성(가짜 기울임)되어 가독성이 떨어지므로 색으로만 구분한다. */}
            {right.subTitle ? <span className="resume-subtitle">{right.subTitle}</span> : ''}
          </div>
          {hasRail ? (
            <div className={railClass}>
              {isPeriod ? <PeriodText text={left.title} /> : <span>{left.title}</span>}
              {left.subTitle}
            </div>
          ) : (
            ''
          )}
        </div>
        {right.skillKeywords && right.skillKeywords.length > 0 && (
          <TechChipList names={right.skillKeywords} size="sm" limit={ROW_CHIP_LIMIT} />
        )}
        {right.descriptions ? (
          <CommonDescription
            descriptions={right.descriptions}
            option={{ className: 'resume-descriptions' }}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
