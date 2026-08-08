import { Col, Row } from 'reactstrap';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { ISkill } from './ISkill';
import { Style } from '../common/Style';
import { TechChip } from '../common/TechChip';

const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.32rem 0.36rem;
  align-items: center;
`;

export default function SkillRow({
  skill,
  index,
}: PropsWithChildren<{ skill: ISkill.Skill; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <h4 style={Style.gray}>{skill.category}</h4>
        </Col>
        <Col sm={12} md={9}>
          <ChipList className="mt-1 mt-md-2 mb-2">
            {skill.items.map((item, itemIndex) => (
              <TechChip key={itemIndex.toString()} name={item.title} level={item.level} />
            ))}
          </ChipList>
        </Col>
      </Row>
    </div>
  );
}
