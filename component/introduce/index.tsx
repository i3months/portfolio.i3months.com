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

  /**
   * 갱신일은 제목 오른쪽에 작게 둔다.
   * 예전의 `(D+N)` 은 영문판에서 뜻이 통하지 않고 본문 끝에서 시선만 끌어 뺐다.
   */
  const latestUpdatedLabel = (
    <span>
      {payload.latestUpdatedLocale === 'ko' ? '최근 업데이트' : 'Last updated'}{' '}
      {latestUpdated.toFormat(Util.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD)}
    </span>
  );

  return (
    <CommonSection title={payload.title || 'INTRODUCE'} aside={latestUpdatedLabel}>
      <div className="resume-introduce">
        {payload.contents.map((content, index) => (
          <p key={index.toString()}>{content}</p>
        ))}
        {payload.sign ? (
          <p className="text-right" style={Style.sign}>
            {payload.sign}
          </p>
        ) : (
          ''
        )}
      </div>
    </CommonSection>
  );
}
