import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  title: '짧은 소개.',
  latestUpdatedLocale: 'ko',

  contents: [
    '스스로 문제를 정의하고 해결하는 일을 즐깁니다. 여러 서비스를 기획부터 개발·운영까지 직접 책임져왔습니다. 풀리지 않는 문제를 만나면 한 계층 아래를 들여다봤고, 해답은 늘 컴퓨터공학 기본기에서 찾을 수 있었습니다. 그래서 새로운 기술을 다루는 만큼, 그 바탕이 되는 원리를 단단히 다지는 데 시간을 투자합니다.',
    'Agentic AI의 결과물은 모델의 성능보다 프로젝트에 필요한 하네스가 좌우한다고 생각합니다. 문서와 규칙을 정리하고, 반복해서 놓치는 실수는 Skill과 Hook으로 검증합니다. AI를 활용하더라도 무엇을 왜 만들지 정하고 결과가 맞는지 판단하는 일은 제 몫으로 남겨둡니다. 판단의 기준을 잃지 않고 제가 만든 소프트웨어에 대해 제 생각을 자신 있게 말할 수 있는 엔지니어가 되는 것이 목표입니다.',
    'IT 기술은 다른 도메인과 연결될 때 가장 큰 가치를 만들고, 그 연결은 개발과 비즈니스의 긴밀한 커뮤니케이션에서 시작된다고 생각합니다. 성공적인 협업을 위해 해결해야 할 문제에 대해 정확히 이해하려 노력합니다. 그렇게 이해한 것을 팀과 나누며, 함께 더 큰 문제를 해결하는 개발자가 되고자 합니다.',
  ],
  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
