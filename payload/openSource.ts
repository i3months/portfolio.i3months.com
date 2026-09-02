import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  title: '오픈소스.',
  list: [
    {
      title: 'awesome-static-generators',
      descriptions: [
        {
          content: 'Awesome Static Generators 목록에 eziwiki 등록',
        },
        {
          content: 'Contributor',
        },
        {
          content: 'https://github.com/myles/awesome-static-generators/pull/221',
          href: 'https://github.com/myles/awesome-static-generators/pull/221',
          weight: 'SEMI_BOLD',
          preIcon: 'github',
        },
        {
          content: 'Github Stars: ',
          postImage:
            'https://img.shields.io/github/stars/myles/awesome-static-generators.svg?style=popout',
        },
      ],
    },
    {
      title: 'awesome-nextjs',
      descriptions: [
        {
          content: 'Awesome Next.js 목록의 Documentation 항목에 eziwiki 등록',
        },
        {
          content: 'Contributor',
        },
        {
          content: 'https://github.com/officialrajdeepsingh/awesome-nextjs/pull/87',
          href: 'https://github.com/officialrajdeepsingh/awesome-nextjs/pull/87',
          weight: 'SEMI_BOLD',
          preIcon: 'github',
        },
        {
          content: 'Github Stars: ',
          postImage:
            'https://img.shields.io/github/stars/officialrajdeepsingh/awesome-nextjs.svg?style=popout',
        },
      ],
    },
    {
      title: 'awesome-docs',
      descriptions: [
        {
          content: 'Awesome Docs 목록의 Site Generators 항목에 eziwiki 등록',
        },
        {
          content: 'Contributor',
        },
        {
          content: 'https://github.com/testthedocs/awesome-docs/pull/114',
          href: 'https://github.com/testthedocs/awesome-docs/pull/114',
          weight: 'SEMI_BOLD',
          preIcon: 'github',
        },
        {
          content: 'Github Stars: ',
          postImage:
            'https://img.shields.io/github/stars/testthedocs/awesome-docs.svg?style=popout',
        },
      ],
    },
    {
      title: 'eziwiki',
      descriptions: [
        {
          content: 'Next.js 기반 경량 위키 및 문서 사이트 생성기 (2025.11 ~ 현재 운영 중)',
          href: 'https://13months.tistory.com/778',
        },
        {
          content: 'Obsidian의 링크 모델, Notion의 UI/UX, 정적 사이트의 배포 편의성을 결합',
        },
        {
          content: '그래프 뷰 기반 문서 간 링크 시각화 및 탭·히스토리 탐색 지원',
        },
        {
          content: 'npm 배포 - npx create-eziwiki',
        },
        {
          content: 'Lighthouse - Performance 99 / Accessibility 100 / Best Practices 100 / SEO 100',
        },
        {
          content: 'Owner & Maintainer',
        },
        {
          content: 'Next.js with TypeScript',
        },
        {
          content: 'https://github.com/i3months/eziwiki',
          href: 'https://github.com/i3months/eziwiki',
          weight: 'SEMI_BOLD',
          preIcon: 'github',
        },
        {
          content: 'https://eziwiki.vercel.app/',
          href: 'https://eziwiki.vercel.app/',
          weight: 'SEMI_BOLD',
          preIcon: 'link',
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/i3months/eziwiki.svg?style=popout',
        },
        {
          content: 'Codacy : ',
          postImage: 'https://app.codacy.com/project/badge/Grade/52948e0fb28648bba1c3ab8f4a3919f9',
        },
      ],
    },
  ],
};

export default openSource;
