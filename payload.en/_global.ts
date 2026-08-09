import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'All About i3months (Joonmo Jeong)';
const description =
  'Resume of Joonmo Jeong, a software engineer who enjoys defining and solving problems — from backend and embedded to AI servers, with Agentic AI in the workflow.';

/** 배포 도메인. canonical / OpenGraph 절대 URL 에 쓰인다. */
const siteUrl = 'https://portfolio.i3months.com';

export const _global: IGlobal.Payload = {
  headTitle: title,
  seo: {
    title,
    description,
    canonical: `${siteUrl}/en`,
    // 같은 이력서의 다국어 판본을 검색엔진에 알린다.
    languageAlternates: [
      { hrefLang: 'ko', href: siteUrl },
      { hrefLang: 'en', href: `${siteUrl}/en` },
      { hrefLang: 'x-default', href: siteUrl },
    ],
    openGraph: {
      url: `${siteUrl}/en`,
      locale: 'en_US',
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
        firstName: 'Joonmo',
        lastName: 'Jeong',
        username: 'i3months',
      },
    },
  },
};
