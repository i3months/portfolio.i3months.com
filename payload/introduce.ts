import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  title: '짧은 소개.',
  latestUpdatedLocale: 'ko',

  contents: [
    '스스로 문제를 정의하고 해결하는 일을 즐깁니다. 여러 서비스를 기획부터 개발·운영까지 직접 책임져왔습니다. 풀리지 않는 문제를 만나면 한 계층 아래를 들여다봤고, 근본적인 해답은 늘 네트워크·데이터베이스·운영체제 같은 기본기에서 찾을 수 있었습니다. 그래서 새로운 기술을 다루는 만큼, 그 바탕이 되는 기본기를 단단히 다지는 데 시간을 투자합니다.',
    'Agentic AI와 함께 개발합니다. 에이전트의 결과물은 모델 성능보다 그 주변에 쌓은 하네스가 좌우한다고 생각합니다. 그래서 프로젝트마다 컨텍스트 문서와 규칙을 정리하고, 계획·구현·검증의 권한을 분리한 Claude Code 기반 멀티 에이전트 하네스를 구축해 실제 서비스 개발에 쓰고 있습니다. 아키텍처를 설계할 때도 사람이 유지보수하기 좋은 구조를 넘어 AI가 한 번에 파악할 수 있는 구조를 고민하고, 반복해서 놓치는 실수는 Skill과 Hook으로 시스템에 녹여 원인부터 제거합니다.',
    'IT 기술은 다른 도메인과 연결될 때 가장 큰 가치를 만들고, 그 연결은 개발과 비즈니스의 긴밀한 커뮤니케이션에서 시작된다고 생각합니다. 성공적인 협업을 위해 해결해야 할 문제에 대해 정확히 이해하려 노력합니다. 그렇게 이해한 것을 팀과 나누며, 함께 더 큰 문제를 해결하는 개발자가 되고자 합니다.',
  ],
  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
