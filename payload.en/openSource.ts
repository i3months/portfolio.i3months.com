import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'awesome-static-generators',
      descriptions: [
        {
          content: 'Added eziwiki to the Awesome Static Generators list',
        },
        {
          content: 'Contributor',
        },
        {
          content: 'https://github.com/myles/awesome-static-generators/pull/221',
          href: 'https://github.com/myles/awesome-static-generators/pull/221',
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
      title: 'eziwiki',
      descriptions: [
        {
          content: 'A modern, lightweight wiki and documentation site generator built with Next.js',
          href: 'https://13months.tistory.com/778',
        },
        {
          content: 'Markdown-based content creation with customizable navigation',
        },
        {
          content: 'Hash-based URLs for privacy protection and static site deployment support',
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
          preIcon: 'github',
        },
        {
          content: 'https://eziwiki.vercel.app/',
          href: 'https://eziwiki.vercel.app/',
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
