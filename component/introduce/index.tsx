import { Row, Col, Badge } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IIntroduce } from './IIntroduce';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { CommonSection } from '../common/CommonSection';

type Payload = IIntroduce.Payload;

export const Introduce = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const latestUpdated = DateTime.fromFormat(
    payload.latestUpdated,
    Util.LUXON_DATE_FORMAT.YYYY_LL_DD,
  );
  const latestUpdatedByNow = Math.floor(
    DateTime.local().diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24,
  );

  return (
    <CommonSection title={payload.title || 'INTRODUCE'}>
      {/* 본문은 다른 섹션의 내용 컬럼과 같은 위치에서 시작하도록 좌측을 비운다. */}
      <Row>
        <Col sm={12} md={{ size: 9, offset: 3 }}>
          {payload.contents.map((content, index) => (
            <p key={index.toString()}>{content}</p>
          ))}
          <p className="text-right">
            <small>
              {payload.latestUpdatedLocale === 'ko' ? '최근 업데이트' : 'Latest Updated'}
            </small>{' '}
            <Badge color="secondary">
              {`${latestUpdated.toFormat(
                Util.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD,
              )} (D+${latestUpdatedByNow})`}
            </Badge>
          </p>
          <p className="text-right" style={Style.sign}>
            {payload.sign}
          </p>
        </Col>
      </Row>
    </CommonSection>
  );
}
