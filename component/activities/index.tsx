import { DateTime } from 'luxon';
import { PropsWithChildren, ReactNode } from 'react';

import { CommonSection, stripTrailingPeriod } from '../common/CommonSection';
import { CommonDescription } from '../common/CommonDescription';
// 추가 링크 블록을 되살릴 때 함께 푼다.
// import { HrefTargetBlank } from '../common';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { IAward } from '../award/IAward';
import { IPresentation } from '../presentation/IPresentation';
import { ILicense } from '../license/ILicense';
import { IEducation } from '../education/IEducation';
import { IEtc } from '../etc/IEtc';
import { IArticle } from '../article/IArticle';
import { EtcSubTitle } from '../etc/subtitle';

/**
 * ### 활동 & 자격
 *
 * @description 수상 · 논문/발표 · 자격 · 학력 · 기타 경험 · 관련 기사처럼
 *              항목은 많고 한 항목의 내용은 짧은 섹션들을 한 섹션의 2열 압축 목록으로 묶는다.
 *              섹션마다 큰 제목과 3rem 여백을 쓰던 것에 비해 스크롤이 크게 준다.
 *
 *              payload 는 각 섹션의 것을 그대로 받는다. 블록 라벨은 각 payload 의 `title` 에서
 *              마침표만 뗀 것이고, `disable` 인 payload 는 블록째 빠진다.
 */
export function Activities({
  locale,
  award,
  presentation,
  license,
  education,
  etc,
  article,
}: PropsWithChildren<{
  locale: 'ko' | 'en';
  award?: IAward.Payload;
  presentation?: IPresentation.Payload;
  license?: ILicense.Payload;
  education?: IEducation.Payload;
  etc?: IEtc.Payload;
  article?: IArticle.Payload;
}>) {
  const blocks: ReactNode[] = [];

  if (isEnabled(award)) {
    blocks.push(
      <Block key="award" label={award.title || 'Awards'}>
        {award.list.map((item, index) => (
          <CompactItem
            key={index.toString()}
            title={item.title}
            subTitle={item.subTitle}
            time={formatMonth(item.at)}
            descriptions={item.descriptions}
          />
        ))}
      </Block>,
    );
  }

  if (isEnabled(presentation)) {
    blocks.push(
      <Block key="presentation" label={presentation.title || 'Publications'}>
        {presentation.list.map((item, index) => (
          <CompactItem
            key={index.toString()}
            title={item.title}
            subTitle={item.subTitle}
            time={formatMonth(item.at)}
            descriptions={item.descriptions}
          />
        ))}
      </Block>,
    );
  }

  if (isEnabled(license)) {
    blocks.push(
      <Block key="license" label={license.title || 'Qualifications'}>
        {license.list.map((item, index) => (
          <CompactItem
            key={index.toString()}
            title={item.title}
            subTitle={item.subTitle}
            time={formatRange(item.startedAt, item.endedAt)}
          />
        ))}
      </Block>,
    );
  }

  if (isEnabled(education)) {
    blocks.push(
      <Block key="education" label={education.title || 'Education'}>
        {education.list.map((item, index) => (
          <CompactItem
            key={index.toString()}
            title={item.title}
            subTitle={item.subTitle}
            // 학력은 끝 날짜가 없으면 재학 중이라는 뜻이라 "2021. 03 –" 로 열어 둔다
            time={formatRange(item.startedAt, item.endedAt, true)}
          />
        ))}
      </Block>,
    );
  }

  if (isEnabled(etc)) {
    blocks.push(
      <Block key="etc" label={etc.title || 'Extras'}>
        {etc.list.map((item, index) => (
          <CompactItem
            key={index.toString()}
            title={item.title}
            subTitle={<EtcSubTitle item={item} />}
            time={formatRange(item.startedAt, item.endedAt)}
            descriptions={item.descriptions}
          />
        ))}
      </Block>,
    );

    /**
     * 추가 링크(BOJ · solved.ac · Codeforces · web-shell)는 당분간 보이지 않는다.
     * payload 는 그대로 두고 렌더만 막아둔다. 다시 보이려면 아래 주석을 풀면 된다.
     */
    // if (etc.extraLinks && etc.extraLinks.length > 0) {
    //   blocks.push(
    //     <Block key="etc-links" label={etc.extraLinksTitle || 'Extra Links'}>
    //       {etc.extraLinks.map((link, index) => (
    //         <li key={index.toString()}>
    //           <div className="resume-compact-head">
    //             <span className="resume-compact-title">
    //               <HrefTargetBlank url={link.url} text={link.title} />
    //             </span>
    //             <span className="resume-compact-time">{hostnameOf(link.url)}</span>
    //           </div>
    //         </li>
    //       ))}
    //     </Block>,
    //   );
    // }
    //
  }

  if (isEnabled(article)) {
    blocks.push(
      <Block key="article" label={article.title || 'Articles'}>
        <li>
          <CommonDescription descriptions={article.list} />
        </li>
      </Block>,
    );
  }

  if (blocks.length === 0) {
    return <></>;
  }

  return (
    <CommonSection title={locale === 'ko' ? '활동 & 자격' : 'ACTIVITIES & QUALIFICATIONS'}>
      <div className="resume-activities">{blocks}</div>
    </CommonSection>
  );
}

/**
 * ### 수상 내역 (1단 압축 목록)
 *
 * @description 논문(전체 폭 행)과 자격·학력·기타(2단 압축) 사이의 중간 무게.
 *              항목이 10개라 2단에 넣으면 옆 블록과 길이가 안 맞아 벽처럼 보이고,
 *              전체 폭 행으로 풀면 자격증과 같은 대접이 된다. 1단 압축 목록이 그 사이다.
 */
export function AwardList({ payload }: PropsWithChildren<{ payload?: IAward.Payload }>) {
  if (!isEnabled(payload)) {
    return <></>;
  }

  return (
    <CommonSection title={payload.title || 'Awards'}>
      <ul className="resume-compact resume-compact-wide">
        {payload.list.map((item, index) => (
          <CompactItem
            key={index.toString()}
            title={item.title}
            subTitle={item.subTitle}
            time={formatMonth(item.at)}
            descriptions={item.descriptions}
          />
        ))}
      </ul>
    </CommonSection>
  );
}

/** `disable` 이 아니고 항목이 하나라도 있는 payload 만 블록이 된다. */
function isEnabled<T extends { disable?: boolean; list: unknown[] }>(payload?: T): payload is T {
  return !!payload && !payload.disable && payload.list.length > 0;
}

function Block({ label, children }: PropsWithChildren<{ label: string }>) {
  return (
    <div className="resume-activity-block">
      <h3 className="resume-activity-label">{stripTrailingPeriod(label)}</h3>
      <ul className="resume-compact">{children}</ul>
    </div>
  );
}

function CompactItem({
  title,
  subTitle,
  time,
  descriptions,
}: PropsWithChildren<{
  title: string;
  subTitle?: ReactNode;
  time: string;
  descriptions?: IRow.Description[];
}>) {
  return (
    <li>
      <div className="resume-compact-head">
        <span className="resume-compact-title">{title}</span>
        <span className="resume-compact-time">{time}</span>
      </div>
      {subTitle ? <div className="resume-compact-sub">{subTitle}</div> : ''}
      {descriptions && descriptions.length > 0 ? (
        <CommonDescription descriptions={descriptions} />
      ) : (
        ''
      )}
    </li>
  );
}

function formatMonth(at: string) {
  return DateTime.fromFormat(at, Util.LUXON_DATE_FORMAT.YYYY_LL).toFormat(
    Util.LUXON_DATE_FORMAT.YYYY_DOT_LL,
  );
}

/**
 * "2026. 03 – 2026. 09" / "2026. 08"
 *
 * @param openEnded 끝 날짜가 없을 때 "2021. 03 –" 처럼 열어 둘지. (학력) 기본은 시작 날짜만.
 */
function formatRange(startedAt: string, endedAt?: string, openEnded = false) {
  const start = formatMonth(startedAt);
  if (endedAt) {
    return `${start} – ${formatMonth(endedAt)}`;
  }
  return openEnded ? `${start} –` : start;
}

// 추가 링크 블록(위 주석)과 함께 쓰인다. 블록을 되살릴 때 같이 푼다.
// function hostnameOf(url: string) {
//   try {
//     return new URL(url).hostname.replace(/^www\./, '');
//   } catch (error) {
//     return '';
//   }
// }
