import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '연구 과제 용역, 정부 기관 시스템 구축, 웹/앱 서비스 백엔드 개발 등 다양한 프로젝트에 참여한 경험이 있습니다. 유지 보수성이 높고 누구나 쉽게 이해할 수 있는 코드를 위해 항상 고민하고, 버그 없는 견고한 시스템을 위해 끊임없이 노력합니다.',
    '다양한 문제를 해결할 수 있는 프로그래밍을 천직으로 생각하고 있고, 프로그래밍을 통해 다른 사람들을 돕는 과정을 진심으로 즐깁니다. 학습한 내용과 문제를 해결했던 경험을 기록하는 것을 좋아해 개발 블로그 운영을 시작했고, IT 분야의 다양한 주제에 대한 포스트를 꾸준히 작성하고 있습니다.',
    '협업에서 가장 중요한 요소는 원활한 커뮤니케이션이라고 생각하고 있습니다. 능동적이고 적극적인 커뮤니케이션을 통해 더 좋은 개발자, 더 나은 사람이 되기 위해 매일매일 치열하게 학습하고, 경험하고 있습니다.',
  ],
  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
