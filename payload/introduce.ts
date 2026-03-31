import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  title: '짧은 소개.',
  latestUpdatedLocale: 'ko',

  contents: [
    'Java, Spring Boot를 주력으로 사용합니다. 클라우드 환경에서 Redis, Elasticsearch, Spring Batch를 활용해 프로덕션 서비스를 개발·운영한 경험이 있으며, 그 과정에서 성능 최적화와 장애 대응 역량을 키웠습니다. 최근에는 Cloud Native 기술과 Agentic AI로 관심 영역을 넓히고 있습니다.',
    '학습한 내용과 문제 해결 경험을 기록하는 것을 좋아해 5년째 기술 블로그를 운영하고 있습니다. 프로그래밍으로 다양한 문제를 해결하고 사람들에게 도움이 되는 과정을 진심으로 즐기며, IT 분야의 다양한 주제를 꾸준히 정리하고 공유합니다.',
    '명확한 문서화는 성공적인 협업의 기반이라고 생각합니다. 회의록·프로젝트 스펙·기술적 결정의 배경까지 꼼꼼히 기록하여 개발 과정에서 발생하는 불필요한 오해와 커뮤니케이션 비용을 최소화합니다.',
  ],
  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
