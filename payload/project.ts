import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  title: '프로젝트 내역.',
  list: [
    {
      title: '전국 대학 정보를 한 눈에 볼 수 있는 플랫폼 - UniScope 개발',
      startedAt: '2025-08',
      endedAt: '2025-11',
      where: '카카오테크캠퍼스 (KakaoTechCampus)',
      descriptions: [
        {
          content: 'GitHub Repository',
          href: 'https://github.com/kakao-tech-campus-3rd-step3/Team21_FE',
          weight: 'SEMI_BOLD',
        },
        {
          content:
            '프로젝트 전반의 UI 컴포넌트를 Storybook으로 문서화해 재사용성을 높이고 개발 속도와 디자인 일관성을 개선',
        },
        {
          content:
            'Playwright를 활용해 E2E 테스트 환경을 구축하고, 실제 브라우저 기반 UI 흐름 및 주요 비즈니스 로직을 자동화',
        },
        {
          content:
            'Lighthouse 4개 지표 고득점을 위해 페이지 구조와 성능을 개선하고, 메타 태그 기반 SEO 최적화로 초기 접근성 개선',
        },
        {
          content:
            'Pre-commit 단계에 Husky를 적용해 린트 규칙을 강제하고, GitHub Actions 기반의 CI/CD 파이프라인 구축',
        },
        {
          content:
            'Feature Sliced Design (FSD) 아키텍처를 도입하고 관련 팀 가이드라인을 수립하여 유지보수성과 확장성 확보',
        },
        {
          content:
            'AWS와 Vercel을 연동한 배포 아키텍처를 설계하고, Nginx 리버스 프록시를 활용한 Blue/Green 무중단 배포 환경 구축',
        },
      ],
      skillKeywords: ['TypeScript', 'React', 'Playwright', 'FSD', 'Storybook'],
    },
    {
      title: '한국화학연구원 화학정보플랫폼 서비스 기능 개발',
      startedAt: '2025-01',
      endedAt: '2025-03',
      where: '아이와즈 (IWAZ)',
      descriptions: [
        {
          content: 'TIBERO로 구축된 기존 데이터를 MariaDB로 이관',
          weight: 'MEDIUM',
          descriptions: [{ content: '이관한 데이터 인덱싱 및 통계 데이터 파티셔닝 진행' }],
        },
        {
          content: 'TIBERO -> MariaDB 쿼리 튜닝 진행',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'WITH RECURSIVE, SORT_PATH 사용 계층 쿼리 구현 및 정렬',
              href: 'https://13months.tistory.com/688',
            },
            { content: '고비용 통계 쿼리 리팩토링 및 성능 최적화 (873.231ms -> 214.245ms)' },
          ],
        },
        {
          content: 'ApexChart 활용 통계 데이터 시각화 및 즐겨찾기, 통계표 검색 기능 구현',
        },
      ],
      skillKeywords: ['Java', 'Spring', 'MariaDB', 'Tibero', 'jQuery', 'ApexChart'],
    },
    {
      title: 'DBpia 서비스 기능 개선 ',
      startedAt: '2024-04',
      endedAt: '2024-12',
      where: '아이와즈 (IWAZ)',
      descriptions: [
        {
          content: '플로팅 배너 부분에 Redis 도입, 백오피스와 DBpia 서비스 연결 및 api 개발',
        },
        {
          content: '통합검색 부분 Elasticsearch 쿼리 및 기존 매핑 수정, 논문 정보 인덱스 재구성',
          href: 'https://13months.tistory.com/769',
        },
        {
          content: '실행 계획 분석 및 재인덱싱, 고비용 쿼리 튜닝 (4481.926ms -> 1111.281ms)',
          href: 'https://13months.tistory.com/779',
        },
        {
          content: '암호화된 View 스키마 관리 및 민감 정보 암·복호화 처리',
          href: 'https://13months.tistory.com/689',
        },
        {
          content:
            'DBpia 서비스 운영 지원 - 엑셀 다운로드 버그 수정, PDF 다운로드 서버 관리, 장기 미접속자 처리',
        },
      ],
      skillKeywords: [
        'Java',
        'Spring',
        'Redis',
        'Elasticsearch',
        'SQL Server',
        'JavaScript',
        'AWS',
      ],
    },
    {
      title: 'DBpia Content Maker (DCM) 논문 메타 제작 플랫폼 개발',
      startedAt: '2024-02',
      endedAt: '2024-12',
      where: '아이와즈 (IWAZ)',
      skillKeywords: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'Spring Batch',
        'SQL Server',
        'NGINX',
        'Elasticsearch',
        'jQuery',
        'Tomcat',
      ],
      descriptions: [
        {
          content: 'C#, C++로 작성된 레거시 소스코드 분석 및 웹 기반 신규 개편 시스템 설계',
        },
        {
          content:
            '원활한 협업을 위한 Git Flow 전략 사용 및 사용자 요구사항, 현행 시스템 프로세스 분석',
        },
        {
          content: '프로젝트 설정 및 운영',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Custom Filter, Authenticator 등 스프링 시큐리티 설정 및 LDAP 기반 AD 계정 로그인 환경 구축',
            },
            {
              content: 'Spring Security 인증 예외 처리 커스터마이징 - 계정 잠금 정책 구현',
              href: 'https://13months.tistory.com/671',
            },
            {
              content:
                'DataSource 설정 - 특정 TLS 버전이 SQL SERVER 2005와 호환되지 않는 문제 해결',
            },
            {
              content:
                'Spring Batch 최신 버전이 SQL SERVER 2005의 시퀀스와 호환되지 않는 문제 해결',
              href: 'https://13months.tistory.com/679',
            },
            {
              content: '인증서 및 도메인 구축, ',
              contentLinks: [
                {
                  text: 'NGINX 활용 리버스 프록시 기반 개발 서버 및 운영 서버 라우팅',
                  href: 'https://13months.tistory.com/681',
                },
              ],
            },
            {
              content: 'Windows Server기반 Tomcat 구축 및 서비스 운영 - ',
              contentLinks: [
                {
                  text: '네트워크 드라이브 관련 권한 문제 해결 (심볼릭 링크)',
                  href: 'https://13months.tistory.com/682',
                },
              ],
            },
            { content: 'Tomcat JVM 메모리 풀 크기 조정 및 운영서버, 개발서버 이중화' },
            { content: '모의 해킹 처리 - XSS, CSRF, 민감한 정보 마스킹 등 보안 관련 처리' },

            {
              content:
                'SQL SERVER의 Linked Server 원격 쿼리 성능 개선 - OPENQUERY 기반 실행 최적화',
              href: 'https://13months.tistory.com/779',
            },
          ],
        },
        {
          content: '논문 메타 제작 시스템 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'PDF 분할 시스템 개발 (PDFBox, PDF.js) - 논리/물리 페이지 구분 처리',
              href: 'https://13months.tistory.com/680',
            },
            {
              content:
                'C++ 기반의 Batch 시스템을 Spring Batch로 고도화 - ERP, DCM 서비스 연동 / 안정성과 처리 속도 개선',
            },
            { content: '에디터 임시 저장 기능 개발 - 5분 주기 자동저장' },
            { content: 'Elasticsearch 활용 이메일 기반 논문 저자 검색 기능 개발' },
          ],
        },
        {
          content: '업무 효율 증진 및 서비스 소요 기간 단축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '논문 제작 시스템 개편 - 메타 작업 시간 감소 (50편 논문 기준 30분 -> 15분)',
            },
            {
              content:
                '배치 시스템 개편 - 입력한 논문이 서비스되기까지 걸리는 시간 단축 (3일 -> 1일)',
            },
          ],
        },
      ],
    },
    {
      title: 'ASD 선별 AI 통합 플랫폼 시스템 기능 개발',
      startedAt: '2023-10',
      endedAt: '2024-02',
      where: '카이런소프트 (CHIRON SOFT)',
      descriptions: [
        {
          content: 'SurveyJS 활용 조건부 분기 설문지 구현',
        },
        {
          content: 'websocket 활용 비디오, 음성 데이터 전송 - AI 추론 서버와 실시간 통신',
        },
        {
          content: 'ApexChart, d3.js 활용 추론 결과 실시간 시각화',
        },
        {
          content: 'Docker 활용 시스템 실행 환경 구축 및 이미지 배포',
        },
        {
          content: 'FastAPI 기반 JWT 인증 및 피실험자, 검사 결과 CRUD 기능 개발',
        },
        {
          content: 'Vue 기반 프론트엔드 구축 및 화면 개발',
        },
      ],
      skillKeywords: ['Vue', 'FastAPI', 'Docker', 'JavaScript', 'ApexChart', 'd3.js'],
    },
    {
      title: 'ETRI 스쿨 홈페이지 기능 개선',
      startedAt: '2023-08',
      endedAt: '2023-10',
      where: '카이런소프트 (CHIRON SOFT)',
      descriptions: [
        {
          content: '회원으로 가입하지 않은 학생, 교수 데이터를 하나의 테이블으로 통합',
        },
        {
          content: 'Vue Quasar 활용 게시판 Pagination 및 단계별 회원가입 기능 구현',
        },
        {
          content: 'Spring Boot, JPA 기반 백오피스 개발 및 ETRI 스쿨 서비스와 연동',
        },
        {
          content: 'ETRI 내 서버 컴퓨터에 Docker 기반 시스템 배포 및 운영',
        },
      ],
      skillKeywords: ['Vue', 'Quasar', 'Spring Boot', 'JPA', 'Docker', 'MariaDB'],
    },
    {
      title: '드론 임무 데이터 관리 시스템 기능 개발',
      startedAt: '2023-05',
      endedAt: '2023-10',
      where: '카이런소프트 (CHIRON SOFT)',
      descriptions: [
        {
          content: '드론 데이터 저장 배치 비즈니스 로직 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'dfs 방식으로 디렉토리 탐색 및 이미지 메타데이터 저장' },
            { content: '프로젝트 단위로 변화 감지, 변화가 있는 경우만 업데이트' },
            { content: 'AtomicBoolean 활용 한 번에 하나의 스케쥴러만 실행될 수 있도록 제한' },
            { content: 'CompletableFuture 활용 스케쥴러 작업 비동기 처리' },
            { content: 'JVM 웜업을 고려한 성능 벤치마킹 테스트 진행' },
          ],
        },
        {
          content: 'React 활용 이미지 데이터 지도 위 시각화',
        },
        {
          content: 'docker-compose로 Frontend, Backend, Database를 하나로 묶어서 배포',
        },
      ],
      skillKeywords: ['React', 'MUI', 'Spring Boot', 'Docker', 'Docker Compose', 'MySQL'],
    },
    {
      title: '국가슈퍼컴퓨팅센터 홈페이지 기능 개선',
      startedAt: '2023-03',
      endedAt: '2023-05',
      where: '카이런소프트 (CHIRON SOFT)',
      descriptions: [
        {
          content: '메인 페이지 리뉴얼 및 백오피스 개발',
        },
        {
          content: '회원 가입 시 이메일 인증 단계 추가 - 인증 코드 유효기간 설정 및 보안 처리',
        },
        {
          content: 'd3.js 활용 슈퍼컴퓨터 사용량 통계 시각화 및 쿼리 튜닝 (6376.21ms → 430.71ms)',
        },
        {
          content: 'websocket 활용 접속한 사용자 대상 브로드캐스트 기능 구현',
        },
      ],
      skillKeywords: ['Spring Boot', 'd3.js', 'JavaScript', 'jQuery', 'MySQL'],
    },
  ],
};

export default project;
