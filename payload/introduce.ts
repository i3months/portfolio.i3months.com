import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  title: '짧은 소개.',

  contents: [
    'Java, SpringBoot를 주력으로 사용합니다. 클라우드 환경에서 Redis, Elasticsearch, Spring Batch 기술을 사용해 프로덕션 서비스를 개발하고 운영한 경험이 있으며, 그 과정에서 성능 최적화와 장애 대응 역량을 키웠습니다. 최근에는 React와 AI 기술에 관심을 가지고 학습하고 있습니다.',
    '다양한 문제를 해결할 수 있는 프로그래밍을 천직으로 생각하고 있고, 프로그래밍을 통해 다른 사람들을 돕는 과정을 진심으로 즐깁니다. 학습한 내용과 문제를 해결했던 경험을 기록하는 것을 좋아해 기술 블로그 운영을 시작했고, IT 분야의 다양한 주제에 대한 포스트를 작성하며 지식을 체계적으로 정리하고 있습니다.',
    '명확한 문서화는 성공적인 협업의 기반이라고 생각합니다. 회의록과 프로젝트 스펙 관리는 물론, 프로젝트 일정 공유와 기술적 결정의 배경까지 상세히 기록하여 개발 과정에서 발생하는 불필요한 오해와 커뮤니케이션 비용을 최소화합니다.',
  ],
  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
