import React, { PropsWithChildren } from 'react';

import { ISkill } from './ISkill';
import { TechChip } from '../common/TechChip';

/**
 * 한 분류 = 그리드의 한 줄 (라벨 셀 + 칩 셀).
 *
 * @description 부모 `.resume-skill-grid` 가 2열 그리드라 셀 두 개를 Fragment 로 돌려준다.
 *              기술 스택 섹션은 전체 목록이 목적이므로 칩을 접지 않는다.
 */
export default function SkillRow({ skill }: PropsWithChildren<{ skill: ISkill.Skill }>) {
  return (
    <>
      <h3 className="resume-skill-label">{skill.category}</h3>
      <div className="d-flex flex-wrap align-items-center" style={{ gap: '0.32rem 0.36rem' }}>
        {skill.items.map((item, itemIndex) => (
          <TechChip key={itemIndex.toString()} name={item.title} level={item.level} />
        ))}
      </div>
    </>
  );
}
