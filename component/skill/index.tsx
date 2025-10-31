import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { Style } from '../common/Style';
import { ISkill } from './ISkill';
import SkillRow from './row';
import { EmptyRowCol } from '../common';
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
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2>
              <span style={Style.blue}>{payload.title || 'SKILL'}</span>
              {/* {createTooltip(payload.tooltip)} */}
            </h2>
          </Col>
        </Row>
        {payload.skills.map((skill, index) => (
          <SkillRow key={index.toString()} skill={skill} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
}

// function createTooltip(content?: string) {
//   if (!content) {
//     return '';
//   }

//   const [tooltipOpen, setTooltipOpen] = useState(false);
//   const toggle = () => setTooltipOpen(!tooltipOpen);

//   return (
//     <small>
//       {' '}
//       <FontAwesomeIcon icon={faQuestionCircle} id="skill-tooltip" />
//       <Tooltip
//         style={{ whiteSpace: 'pre-wrap' }}
//         placement="right"
//         target="skill-tooltip"
//         isOpen={tooltipOpen}
//         toggle={toggle}
//       >
//         {content}
//       </Tooltip>
//     </small>
//   );
// }
