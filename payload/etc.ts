import { IEtc } from '../component/etc/IEtc';

const etc: IEtc.Payload = {
  disable: false,
  title: '기타 경험.',

  list: [
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
      subTitle: '프로그래밍 대회 알고리즘 문제 출제·검수 및 운영 지원',
      startedAt: '2025-09',
    },
    {
      title: '제43회 데이터분석 준전문가 (ADsP)',
      subTitle: 'Advanced Data Analytics Semi-Professional',
      startedAt: '2024-11',
    },
    {
      title: '제54회 SQL 개발자 (SQLD)',
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
      title: '13months-web-shell',
      url: 'https://13months-web-shell.vercel.app',
    },
  ],

  extraLinksTitle: '추가 링크',
};

export default etc;
