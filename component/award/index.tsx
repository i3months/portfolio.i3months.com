import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import AwardRow from './row';
import { IAward } from './IAward';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IAward.Payload;

export const Award = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title={payload.title || 'AWARD'}>
      <AwardRow payload={payload} />
    </CommonSection>
  );
}
