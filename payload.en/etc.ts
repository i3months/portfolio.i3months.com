import { IEtc } from '../component/etc/IEtc';

const etc: IEtc.Payload = {
  disable: false,

  list: [
    {
      title: 'University of Nevada, Las Vegas (UNLV) - Visiting Scholar',
      subTitle: 'Howard R. Hughes College of Engineering - Embedded AI Workshops',
      startedAt: '2026-02',
      endedAt: '2026-03',
      subTitleLinksPrefix: 'Research Paper',
      subTitleLinks: [
        {
          text: 'Hammering-Precursor Monitoring for Embedded Systems under OOD Stress',
        },
      ],
    },
    {
      title:
        'Seoul National University Next-Generation Semiconductor Innovation Convergence College - Undergraduate Research Intern',
      subTitle: 'Research on LLM compression techniques in edge computing environments',
      startedAt: '2025-11',
      endedAt: '2026-01',
      subTitleLinksPrefix: 'Study and Seminar',
      subTitleLinks: [
        {
          text: 'HOBBIT',
          href: 'https://13months.tistory.com/795',
        },
        {
          text: 'Fault Injection',
          href: 'https://13months.tistory.com/802',
        },
        {
          text: 'LoRA / RAG',
          href: 'https://13months.tistory.com/802',
        },
      ],
    },
    {
      title: 'KakaoTechCampus 3rd Cohort - Frontend',
      subTitle: 'Outstanding Kookies of Stage 2 (Top Performance Award)',
      startedAt: '2025-04',
      endedAt: '2025-11',
    },
    {
      title: 'AI Career School Startup Hackathon L:AUNCH Completion',
      subTitle:
        'Practical AI-driven Startup Program hosted by Root Impact and sponsored by Google.org',
      startedAt: '2025-09',
    },
    {
      title: 'Chungnam National University 2025 SW-IT Contest Organizer',
      subTitle: ' algorithmic contest problem design, review, and operations support',
      startedAt: '2025-09',
      subTitleInlineLink: {
        text: 'SW-IT Contest',
        href: 'https://www.acmicpc.net/category/detail/4575',
        position: 'before',
      },
    },
    {
      title: 'TOEIC Speaking',
      subTitle: 'Intermediate High (Speaking Score 150)',
      startedAt: '2026-03',
    },
    {
      title: '43rd Advanced Data Analytics Semi-Professional (ADsP)',
      subTitle: 'Advanced Data Analytics Semi-Professional',
      startedAt: '2024-11',
    },
    {
      title: '54th Structured Query Language Developer (SQLD)',
      subTitle: 'Structured Query Language Developer',
      startedAt: '2024-09',
    },
  ],

  extraLinks: [
    {
      title: 'Baekjoon Online Judge (BOJ)',
      url: 'https://www.acmicpc.net/user/13months',
    },
    {
      title: 'solved.ac',
      url: 'https://solved.ac/profile/13months',
    },
    {
      title: 'Codeforces',
      url: 'https://codeforces.com/profile/shtnom31',
    },
    {
      title: 'i3months-web-shell',
      url: 'https://shell.i3months.com',
    },
  ],
};

export default etc;
