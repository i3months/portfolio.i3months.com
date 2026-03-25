import { IEtc } from '../component/etc/IEtc';

const etc: IEtc.Payload = {
  disable: false,
  title: '기타 경험.',

  list: [
    {
      title: '충남대학교 실전코딩 (Practical Coding) 교과목 튜터',
      subTitle: 'MSA, CI/CD (Docker, Kubernetes), Software Testing 학습 지원',
      startedAt: '2026-03',
      endedAt: '2026-06',
    },
    {
      title: 'University of Nevada, Las Vegas (UNLV) - Visiting Scholar',
      subTitle: 'Howard R. Hughes College of Engineering - Embedded AI Workshops',
      startedAt: '2026-02',
      endedAt: '2026-03',
      subTitleLinksPrefix: '연구 논문',
      subTitleLinks: [
        {
          text: 'Hammering-Precursor Monitoring for Embedded Systems under OOD Stress',
        },
      ],
    },
    {
      title: '서울대학교 차세대반도체 혁신융합대학 - 학부생 연구 인턴',
      subTitle: 'Edge Computing 환경에서의 LLM 경량화 기법 연구',
      startedAt: '2025-11',
      endedAt: '2026-01',
      subTitleLinksPrefix: '스터디 및 세미나',
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
      title: '카카오테크캠퍼스 3기 - Frontend',
      subTitle: '2단계 우수 쿠키즈 선정 (Top Performance Award)',
      startedAt: '2025-04',
      endedAt: '2025-11',
    },
    {
      title: 'AI 커리어스쿨 창업톤 L:AUNCH 수료',
      subTitle: 'Google.org 후원, Root Impact 주최의 실전형 AI 활용 창업 프로그램',
      startedAt: '2025-09',
    },
    {
      title: '충남대학교 2025 SW-IT Contest 운영진',
      subTitle: ' 알고리즘 대회 문제 출제·검수 및 운영 지원',
      startedAt: '2025-09',
      subTitleInlineLink: {
        text: 'SW-IT Contest',
        href: 'https://www.acmicpc.net/category/detail/4575',
        position: 'before',
      },
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

  extraLinksTitle: '추가 링크',
};

export default etc;
