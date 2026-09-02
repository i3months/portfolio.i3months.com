import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,
  title: 'PUBLICATIONS & PRESENTATIONS',

  list: [
    {
      title: 'Quality-Aware Facial Mesh Filtering for Robust Contactless Head-Pose Assessment',
      subTitle:
        'ICIIBMS 2026 (International Conference on Intelligent Informatics and BioMedical Sciences) · Okinawa, Japan',
      at: '2026-11',
      descriptions: [
        {
          content: 'Authors: Minseok Park, ',
          contentLinks: [
            {
              text: 'Joonmo Jeong',
              bold: true,
            },
          ],
        },
        {
          content: 'Accepted · Poster presentation anticipated (2026.11.21)',
        },
      ],
    },
    {
      title:
        'Structure over Scale: A Multi-Axis Ensemble for Small-Sample Multimodal Lifelog Prediction',
      subTitle:
        'ICTC 2026 (International Conference on Information and Communication Technology Convergence) · Jeju, Korea',
      at: '2026-10',
      descriptions: [
        {
          content: 'Authors: ',
          contentLinks: [
            {
              text: 'Joonmo Jeong',
              bold: true,
            },
            {
              text: ', Yoonjae Kim, Minsu Kim, Prof. Jong-Ryul Lee (corresponding author)',
            },
          ],
        },
        {
          content: 'Under review · Poster presentation anticipated (2026.10.15)',
        },
      ],
    },
    {
      title: 'Environment-Conditioned Hammering-Precursor Monitoring for Reliable Embedded Systems',
      subTitle: 'KCC 2026 (53rd Korea Computer Congress) · Jeju, Korea',
      at: '2026-06',
      descriptions: [
        {
          content: 'Authors: Minyong Jeong, ',
          contentLinks: [
            {
              text: 'Joonmo Jeong',
              bold: true,
            },
            {
              text:
                ', Woojin An, Seohyeon Cho, Seungwoo Jeong, Prof. Venkatesan Muthukumar (corresponding author)',
            },
          ],
        },
        {
          content: 'Presented · Conference presentation (2026.06.24)',
        },
        {
          content: 'Awarded · Encouragement Prize, Paper Competition (2026.07.31)',
        },
      ],
    },
  ],
};

export default presentation;
