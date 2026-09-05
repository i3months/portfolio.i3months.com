import { PropsWithChildren } from 'react';
import ProjectRow from './row';
import { CommonSection } from '../common/CommonSection';
import { IProject } from './IProject';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IProject.Payload;

export const Project = {
  Component: ({
    payload,
    locale,
  }: PropsWithChildren<{ payload: Payload; locale?: 'ko' | 'en' }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: ({ payload: inner }) => <Component payload={inner} locale={locale} />,
    });
  },
};

function Component({
  payload,
  locale,
}: PropsWithChildren<{ payload: Payload; locale?: 'ko' | 'en' }>) {
  return (
    <CommonSection title={payload.title || 'PROJECT'}>
      <ProjectRow payload={payload} locale={locale} />
    </CommonSection>
  );
}
