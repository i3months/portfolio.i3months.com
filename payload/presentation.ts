import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,
  title: '연구 논문 및 학술 발표.',

  list: [
    {
      title: 'Quality-Aware Facial Mesh Filtering for Robust Contactless Head-Pose Assessment',
      subTitle:
        'ICIIBMS 2026 (International Conference on Intelligent Informatics and BioMedical Sciences) · Okinawa, Japan',
      at: '2026-11',
      descriptions: [
        {
          content: 'Authors: 박민석, ',
          contentLinks: [
            {
              text: '정준모',
              bold: true,
            },
          ],
        },
        {
          content: 'Accepted · 포스터 발표 예정 (2026.11.21)',
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
              text: '정준모',
              bold: true,
            },
            {
              text: ', 김윤재, 김민수, 이종률 교수 (교신저자)',
            },
          ],
        },
        {
          content: 'Under Review · 포스터 발표 예정 (2026.10.15)',
        },
      ],
    },
    {
      title: 'Environment-Conditioned Hammering-Precursor Monitoring for Reliable Embedded Systems',
      subTitle: 'KCC 2026 (제53회 한국컴퓨터종합학술대회) · 제주, 대한민국',
      at: '2026-06',
      descriptions: [
        {
          content: 'Authors: 정민용, ',
          contentLinks: [
            {
              text: '정준모',
              bold: true,
            },
            {
              text: ', 안우진, 조서현, 정승우, Venkatesan Muthukumar 교수 (교신저자)',
            },
          ],
        },
        {
          content: 'Presented · 학술대회 발표 (2026.06.24)',
        },
        {
          content: 'Awarded · 논문경진대회 장려상 (2026.08)',
        },
      ],
    },
  ],
};

export default presentation;
