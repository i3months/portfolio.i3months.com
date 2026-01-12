import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  title: '오픈소스.',
  list: [
    {
      title: 'eziwiki',
      descriptions: [
        {
          content: 'Next.js 기반 경량 위키 및 문서 사이트 생성기',
          href: 'https://13months.tistory.com/778',
        },
        {
          content: 'Markdown 기반 콘텐츠 작성 및 커스터마이징 가능한 네비게이션 제공',
        },
        {
          content: 'Hash 기반 URL로 프라이버시 보호 및 정적 사이트 배포 지원',
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
        },
        {
          content: 'https://eziwiki.vercel.app/',
          href: 'https://eziwiki.vercel.app/',
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/i3months/eziwiki.svg?style=popout',
        },
      ],
    },
  ],
};

export default openSource;
