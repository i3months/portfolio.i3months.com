import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import { HrefTargetBlank } from '../common';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { IEtc } from './IEtc';
import { EtcSubTitle } from './subtitle';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IEtc.Payload;
type Item = IEtc.Item;

/**
 * ### 기타 경험 (독립 섹션)
 *
 * @description 페이지에서는 `Activities` 가 이 payload 를 압축 목록으로 묶어 보여준다.
 *              독립 섹션으로 다시 쓸 수 있도록 남겨둔다.
 */
export const Etc = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<IEtc.Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title={payload.title || 'EXTRAS'}>
      {payload.list.map((item, index) => (
        <CommonRows key={index.toString()} payload={serialize(item)} index={index} />
      ))}
      {payload.extraLinks && payload.extraLinks.length > 0 && (
        <ExtraLinksRow
          extraLinks={payload.extraLinks}
          extraLinksTitle={payload.extraLinksTitle}
          index={payload.list.length}
        />
      )}
    </CommonSection>
  );
}

function ExtraLinksRow({
  extraLinks,
  extraLinksTitle,
  index,
}: PropsWithChildren<{
  extraLinks: IEtc.ExtraLink[];
  extraLinksTitle?: string;
  index: number;
}>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <div className="resume-row">
        <div className="resume-row-head">
          <div className="resume-row-heading">
            <h3>{extraLinksTitle || 'Extra Links'}</h3>
          </div>
        </div>
        <ul className="resume-descriptions">
          {extraLinks.map((link, linkIndex) => (
            <li key={linkIndex.toString()}>
              <HrefTargetBlank url={link.url} text={link.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function serialize(item: Item): IRow.Payload {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(item.startedAt, DATE_FORMAT.YYYY_LL).toFormat(
    DATE_FORMAT.YYYY_DOT_LL,
  );
  const title = (() => {
    if (item.endedAt) {
      const endedAt = DateTime.fromFormat(item.endedAt, DATE_FORMAT.YYYY_LL).toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      );
      return `${startedAt} ~ ${endedAt}`;
    }
    return startedAt;
  })();

  return {
    left: {
      title,
    },
    right: {
      title: item.title,
      // IRow.Right.subTitle 은 string 타입이지만 렌더링은 ReactNode 로 처리된다.
      subTitle: (<EtcSubTitle item={item} />) as any,
      descriptions: item.descriptions,
    },
  };
}
