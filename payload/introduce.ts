import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  title: '짧은 소개.',
  latestUpdatedLocale: 'ko',

  contents: [
    'Java, Spring Boot를 주력으로 사용합니다. 클라우드 환경에서 Redis, Elasticsearch, Spring Batch를 활용해 프로덕션 서비스를 개발·운영한 경험이 있으며, 그 과정에서 성능 최적화와 장애 대응 역량을 키웠습니다. 최근에는 Cloud Native 기술과 Agentic AI로 관심 영역을 넓히고 있습니다.',
    '명확한 문서화가 협업의 질을 결정한다고 생각합니다. 5년째 기술 블로그를 운영하며 학습과 문제 해결 경험을 정리해왔고, 회의록·프로젝트 스펙·기술적 결정의 배경까지 꼼꼼히 기록하여 개발 과정의 불필요한 오해와 커뮤니케이션 비용을 최소화합니다.',
  ],
  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
