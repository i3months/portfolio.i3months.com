import { ILicense } from '../component/license/ILicense';

const license: ILicense.Payload = {
  disable: false,
  title: '자격증.',

  list: [
    {
      title: 'TOEIC Speaking',
      subTitle: 'Intermediate High (Speaking Score 150)',
      startedAt: '2026-03',
      endedAt: '2028-03',
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
};

export default license;
