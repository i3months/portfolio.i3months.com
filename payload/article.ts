import { IArticle } from '../component/article/IArticle';

const article: IArticle.Payload = {
  disable: false,
  title: '관련 기사.',

  list: [
    {
      content: '(2023.12) 2023 NTIS 성과보고회 현장속으로!',
      href: 'https://www.youtube.com/watch?v=-YzVHPDvi2E',
    },
    {
      content:
        '(2023.07) 2023 환경데이터 활용 및 분석 공모전 "환경데이터 활용" 아이디어 기획 부문 대상 온리',
      href: 'https://www.youtube.com/watch?v=FGyaAagh1GY',
    },
    {
      content: '(2023.06) 2023 환경데이터 공모전 시상…“탄소중립·자원순환 등 ESG테크 향연”',
      href: 'https://v.daum.net/v/20230629151403309',
    },
  ],
};

export default article;
