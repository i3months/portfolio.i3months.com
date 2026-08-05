import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,
  title: '논문.',

  list: [
    {
      title:
        'Structure over Scale: A Multi-Axis Ensemble for Small-Sample Multimodal Lifelog Prediction',
      subTitle:
        'ICTC 2026 (International Conference on Information and Communication Technology Convergence)',
      at: '2026-08',
      descriptions: [
        {
          content: '저자: 정준모, 김윤재, 김민수, 이종렬',
        },
        {
          content: 'Under Review · 포스터 발표 예정 (2026.10.15)',
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
          content: '저자: 박민석, 정준모',
        },
        {
          content: 'Accepted · 포스터 발표 예정 (2026.11.21)',
        },
      ],
    },
    {
      title: 'Environment-Conditioned Hammering-Precursor Monitoring for Reliable Embedded Systems',
      subTitle: 'KCC 2026 (한국컴퓨터종합학술대회)',
      at: '2026-06',
      descriptions: [
        {
          content: '저자: 정민용, 정준모, 안우진, 조서현, 정승우, Venkatesan Muthukumar',
        },
        {
          content: '발표 완료 (2026.06.24)',
        },
      ],
    },
  ],
};

export default presentation;
