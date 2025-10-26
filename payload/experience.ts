import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '아이와즈 (IWAZ)',
      positions: [
        {
          title: '지능기술사업부 사원 - 웹 개발자',
          startedAt: '2024-02',
          endedAt: '2025-03',
          descriptions: [
            '한국화학연구원 화학정보플랫폼 서비스 기능 개발 - 쿼리 튜닝, 데이터 이관 및 시각화',
            'DBpia 서비스 기능 개선 - 백오피스 및 DBpia 시스템 유지보수 및 추가 개발',
            'DBpia Content Maker (DCM) 논문 메타 제작 플랫폼 개발 - 신규 서비스 개발',
          ],
          skillKeywords: [
            'Java',
            'Spring',
            'Spring Boot',
            'Spring Batch',
            'Spring Security',
            'AWS',
            'Redis',
            'NGINX',
            'Elasticsearch',
            'MariaDB',
            'Tibero',
            'SQL Server',
            'jQuery',
            'JavaScript',
            'ApexChart',
            'Tomcat',
          ],
        },
      ],
    },
    {
      title: '카이런소프트 (CHIRON SOFT)',
      positions: [
        {
          title: '연구개발부 연구원 - 웹 개발자',
          startedAt: '2023-03',
          endedAt: '2024-02',
          descriptions: [
            'ASD 선별 AI 통합 플랫폼 시스템 기능 개발 - 신규 서비스 개발',
            'ETRI 스쿨 홈페이지 기능 개선 - 학생 및 교수 데이터 통합 및 백오피스 개발',
            '드론 임무 데이터 관리 시스템 기능 개발 - 드론 데이터 저장 스케쥴러 로직 개발',
            '국가슈퍼컴퓨팅센터 홈페이지 기능 개선 - KSC 홈페이지 유지보수 및 추가 개발',
          ],
          skillKeywords: [
            'Java',
            'Spring',
            'Spring Boot',
            'Spring Security',
            'JPA',
            'Spring Data JPA',
            'jQuery',
            'JavaScript',
            'ApexChart',
            'd3.js',
            'Vue',
            'Quasar',
            'React',
            'MUI',
            'Docker',
            'Docker Compose',
            'FastAPI',
            'MySQL',
            'MariaDB',
          ],
        },
      ],
    },
  ],
};

export default experience;
