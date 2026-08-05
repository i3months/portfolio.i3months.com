import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,
  title: 'PUBLICATION',

  list: [
    {
      title:
        'Structure over Scale: A Multi-Axis Ensemble for Small-Sample Multimodal Lifelog Prediction',
      subTitle:
        'ICTC 2026 (International Conference on Information and Communication Technology Convergence)',
      at: '2026-08',
      descriptions: [
        {
          content: 'Authors: Joonmo Jeong, Yoonjae Kim, Minsu Kim, Jong-Ryul Lee',
        },
        {
          content: 'Under review · Poster presentation anticipated (2026.10.15)',
        },
      ],
    },
    {
      title: 'Quality-Aware Facial Mesh Filtering for Robust Contactless Head-Pose Assessment',
      subTitle:
        'ICIIBMS 2026 (International Conference on Intelligent Informatics and BioMedical Sciences)',
      at: '2026-07',
      descriptions: [
        {
          content: 'Authors: Minseok Park, Joonmo Jeong',
        },
        {
          content: 'Accepted · Poster presentation anticipated (2026.11.21)',
        },
      ],
    },
    {
      title: 'Environment-Conditioned Hammering-Precursor Monitoring for Reliable Embedded Systems',
      subTitle: 'KCC 2026 (Korea Computer Congress)',
      at: '2026-06',
      descriptions: [
        {
          content:
            'Authors: Minyong Jeong, Joonmo Jeong, Woojin An, Seohyeon Cho, Seungwoo Jeong, Venkatesan Muthukumar',
        },
        {
          content: 'Presented (2026.06.24)',
        },
      ],
    },
  ],
};

export default presentation;
