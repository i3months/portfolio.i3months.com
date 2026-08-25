import { PropsWithChildren } from 'react';
import { ISkill } from './ISkill';
import SkillRow from './row';
import { CommonSection } from '../common/CommonSection';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = ISkill.Payload;

export const Skill = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title={payload.title || 'SKILL'}>
      {/* 분류 라벨 | 칩 — 분류마다 큰 여백과 구분선을 두지 않고 표처럼 촘촘히 */}
      <div className="resume-skill-grid">
        {payload.skills.map((skill, index) => (
          <SkillRow key={index.toString()} skill={skill} />
        ))}
      </div>
    </CommonSection>
  );
}
