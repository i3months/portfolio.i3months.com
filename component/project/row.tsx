import { DateTime } from 'luxon';
import { PropsWithChildren, useState } from 'react';
import { IProject } from './IProject';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { EmptyRowCol } from '../common';

/**
 * 처음부터 보여줄 프로젝트 수.
 *
 * @description 프로젝트가 11 건이라 전부 펼치면 페이지의 대부분을 차지한다.
 *              최근·대표 프로젝트만 먼저 보이고 나머지는 "더 보기" 로 연다.
 */
const PROJECT_VISIBLE_COUNT = 3;

export default function ProjectRow({
  payload,
  locale,
}: PropsWithChildren<{ payload: IProject.Payload; locale?: 'ko' | 'en' }>) {
  const [expanded, setExpanded] = useState(false);

  const visible = payload.list.slice(0, PROJECT_VISIBLE_COUNT);
  const rest = payload.list.slice(PROJECT_VISIBLE_COUNT);
  const isKo = locale !== 'en';

  const renderRow = (item: IProject.Item, index: number) => (
    <CommonRows
      key={index.toString()}
      payload={serialize(item, payload.presentLabel)}
      index={index}
    />
  );

  return (
    <EmptyRowCol>
      {visible.map((item, index) => renderRow(item, index))}

      {rest.length > 0 && (
        <>
          {/**
           * 나머지 프로젝트는 DOM 에 그대로 두고 화면에서만 감춘다.
           * 덕분에 인쇄와 검색엔진에는 전부 나온다. (styles/global.css 의 `.resume-collapsed`)
           */}
          <div className={expanded ? undefined : 'resume-collapsed'}>
            {rest.map((item, index) => renderRow(item, index + PROJECT_VISIBLE_COUNT))}
          </div>

          <button
            type="button"
            className="resume-more resume-screen-only"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            {(() => {
              if (expanded) {
                return isKo ? '접기' : 'Show less';
              }
              return isKo
                ? `프로젝트 ${rest.length}건 더 보기`
                : `Show ${rest.length} more projects`;
            })()}
            <svg
              className={expanded ? 'resume-more-icon is-open' : 'resume-more-icon'}
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </>
      )}
    </EmptyRowCol>
  );
}

function serialize(payload: IProject.Item, presentLabel?: string): IRow.Payload {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(payload.startedAt, DATE_FORMAT.YYYY_LL).toFormat(
    DATE_FORMAT.YYYY_DOT_LL,
  );
  const title = (() => {
    if (payload.endedAt) {
      const endedAt = DateTime.fromFormat(payload.endedAt, DATE_FORMAT.YYYY_LL).toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      );
      return `${startedAt} ~ ${endedAt}`;
    }
    return presentLabel ? `${startedAt} ~ ${presentLabel}` : `${startedAt} ~`;
  })();

  return {
    left: {
      title,
    },
    right: {
      title: payload.title,
      subTitle: payload.where,
      descriptions: payload.descriptions,
      skillKeywords: payload.skillKeywords,
    },
  };
}
