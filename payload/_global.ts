import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'All About i3months (정준모)';
const description =
  '문제를 정의하고 해결하는 일을 즐기는 개발자 정준모의 이력서입니다. 백엔드부터 AI 서버까지의 개발 경험과 Agentic AI 활용을 정리했습니다.';

/** 배포 도메인. canonical / OpenGraph 절대 URL 에 쓰인다. */
const siteUrl = 'https://portfolio.i3months.com';

export const _global: IGlobal.Payload = {
  headTitle: title,
  seo: {
    title,
    description,
    canonical: siteUrl,
    // 같은 이력서의 다국어 판본을 검색엔진에 알린다.
    languageAlternates: [
      { hrefLang: 'ko', href: siteUrl },
      { hrefLang: 'en', href: `${siteUrl}/en` },
      { hrefLang: 'x-default', href: siteUrl },
    ],
    openGraph: {
      url: siteUrl,
      locale: 'ko_KR',
      title,
      description,
      images: [
        {
          url: `${siteUrl}${previewImage}`,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
      type: 'profile',
      profile: {
        firstName: '준모',
        lastName: '정',
        username: 'i3months',
      },
    },
  },
};
