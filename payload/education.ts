import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,
  title: '학력 사항.',

  list: [
    {
      title: '충남대학교',
      subTitle: '컴퓨터융합학부 6학기 재학중 (GPA 3.94 / 4.5)',
      startedAt: '2021-03',
      // endedAt: '2010-02',
    },
  ],
};

export default education;
