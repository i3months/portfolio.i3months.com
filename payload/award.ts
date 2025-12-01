import { IAward } from '../component/award/IAward';

const presentation: IAward.Payload = {
  disable: false,
  title: '수상 내역.',

  list: [
    {
      title: '충남대학교 알고리즘 경진대회 - DevDay',
      subTitle: '동상 3회 / 장려상 1회',
      at: '2025-11',
      descriptions: [
        {
          content: '전교생 대상 매년 상반기와 하반기에 시행되는 교내 알고리즘 대회',
        },
        {
          content: '2025.11 동상 / 2025.06 동상 / 2022.06 동상 / 2021.11 장려상',
        },
      ],
    },
    {
      title: '충남대학교 생성형 인공지능 챌린지',
      subTitle: '장려상 수상',
      at: '2025-09',
      descriptions: [
        {
          content: 'LangChain을 사용해 강의자료 자동 생성 도구 "PPTree" 개발',
        },
      ],
    },
    {
      title: '카카오테크캠퍼스 2단계 우수 쿠키즈 선정',
      subTitle: 'Top Performance Award(FE) 수상',
      at: '2025-08',
      descriptions: [
        {
          content: 'Frontend 트랙에서 최우수 성적으로 2단계 수료',
        },
      ],
    },
    {
      title: '제 11회 NTIS 정보활용 경진대회',
      subTitle: '대상 (과학기술정보통신부장관상) 수상',
      at: '2023-12',
      descriptions: [
        {
          content: 'Vue와 FastAPI를 사용해 과학기술 문서 작성 에디터 "NTIS STUDIO" 개발',
        },
      ],
    },
    {
      title: 'K-디지털 챌린지: 2023 마이데이터 아이디어 공모전',
      subTitle: '우수상 (한국데이터산업진흥원장상) 수상',
      at: '2023-08',
      descriptions: [
        {
          content: 'Flutter를 사용해 "나를 가장 잘 아는 여행 - 트리피" 앱 개발',
        },
      ],
    },
    {
      title: '2023 환경 데이터 활용 및 분석 공모전',
      subTitle: '대상 (환경부장관상) 수상',
      at: '2023-06',
      descriptions: [
        {
          content: '"온실가스 배출 데이터를 활용한 기업별 탄소 배출량 분석 플랫폼 - CEAP" 기획',
        },
      ],
    },
    {
      title: '충남대학교 주니어 창의작품 경진대회',
      subTitle: '장려상 수상',
      at: '2021-11',
      descriptions: [
        {
          content: '"딥러닝을 활용한 이미지 인식 냉장고 관리 서비스" 개발',
        },
      ],
    },
  ],
};

export default presentation;
