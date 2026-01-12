import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { CommonSection } from '../common/CommonSection';
import { EmptyRowCol, HrefTargetBlank } from '../common';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IEtc } from './IEtc';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IEtc.Payload;
type Item = IEtc.Item;

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
      <EducationRow payload={payload} />
    </CommonSection>
  );
}

function EducationRow({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
      })}
      {payload.extraLinks && payload.extraLinks.length > 0 && (
        <ExtraLinksRow
          extraLinks={payload.extraLinks}
          extraLinksTitle={payload.extraLinksTitle}
          index={payload.list.length}
        />
      )}
    </EmptyRowCol>
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
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <h4 style={Style.gray}>{extraLinksTitle || 'Extra Links'}</h4>
        </Col>
        <Col sm={12} md={9}>
          <ul style={{ paddingLeft: '1.5rem', marginTop: 0 }}>
            {extraLinks.map((link, linkIndex) => (
              <li key={linkIndex.toString()} style={{ marginBottom: '0.5rem' }}>
                <HrefTargetBlank url={link.url} text={link.title} />
              </li>
            ))}
          </ul>
        </Col>
      </Row>
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

  // subTitleLinks가 있으면 subTitle 아래에 링크들을 표시
  const subTitleElement = item.subTitleLinks ? (
    <div>
      {item.subTitle && <div>{item.subTitle}</div>}
      <div>
        {item.subTitleLinksPrefix && <span>{item.subTitleLinksPrefix} · </span>}
        {item.subTitleLinks.map((link, index) => (
          <span key={index}>
            {index > 0 && ' · '}
            {link.href ? (
              <HrefTargetBlank url={link.href} text={link.text} />
            ) : (
              <span>{link.text}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  ) : (
    undefined
  );

  return {
    left: {
      title,
    },
    right: {
      title: item.title,
      subTitle: subTitleElement ? (subTitleElement as any) : item.subTitle,
      descriptions: item.descriptions,
      skillKeywords: item.skillKeywords,
    },
  };
}
