import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { IRow } from './IRow';
import { Style } from './Style';
import { CommonDescription } from './CommonDescription';
import { TechChipList } from './TechChip';

export function CommonRows({
  index,
  payload,
}: PropsWithChildren<{ payload: IRow.Payload; index: number }>) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.subTitle);

  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <Row>
            <Col md={12}>
              <h3 style={Style.gray}>{left.title}</h3>
            </Col>
            {left.subTitle ? <Col md={12}>{left.subTitle}</Col> : ''}
          </Row>
        </Col>
        <Col sm={12} md={9}>
          {right.title ? <h3>{right.title}</h3> : ''}
          {/* 한글은 이탤릭이 합성(가짜 기울임)되어 가독성이 떨어지므로 색으로만 구분한다. */}
          {right.subTitle ? (
            <div className="resume-subtitle" style={Style.gray}>
              {right.subTitle}
            </div>
          ) : (
            ''
          )}
          {/* Skill Keywords를 subTitle 바로 아래에 표시 */}
          {right.skillKeywords && right.skillKeywords.length > 0 && (
            <TechChipList names={right.skillKeywords} size="sm" className="mt-2 mb-2" />
          )}
          {right.descriptions ? (
            <CommonDescription
              descriptions={right.descriptions}
              option={{ padding: isNeedDescriptionPadding }}
            />
          ) : (
            ''
          )}
        </Col>
      </Row>
    </div>
  );
}
