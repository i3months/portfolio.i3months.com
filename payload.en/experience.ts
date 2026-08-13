import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'IWAZ (South Korea)',
      positions: [
        {
          title: 'Intelligent Technology Department Staff',
          startedAt: '2024-02',
          endedAt: '2025-03',
          descriptions: [
            'Collaborated with a 10-member team of designers, developers, and planners to develop and operate DBpia and its related services.',
            'Developed features for the Chemical Information Platform Service at the Korea Research Institute of Chemical Technology (KRICT) – Query tuning, data migration, and visualization.',
            'Enhanced functionalities of the DBpia service – Maintenance and additional development of the back office and the DBpia system.',
            'Developed and maintained DBpia Content Maker (DCM), a research paper metadata creation platform – New service development and operation.',
          ],
          skillKeywords: [
            'Java',
            'Spring',
            'Spring Boot',
            'Spring Batch',
            'Spring Security',
            'AWS',
            'Redis',
            'NGINX',
            'Elasticsearch',
            'MariaDB',
            'Tibero',
            'SQL Server',
            'jQuery',
            'JavaScript',
            'ApexChart',
            'Tomcat',
          ],
        },
      ],
    },
    {
      title: 'CHIRON SOFT (South Korea)',
      positions: [
        {
          title: 'Research & Development Department Researcher',
          startedAt: '2023-03',
          endedAt: '2024-02',
          descriptions: [
            'Collaborated with a 5-member team of designers and developers to develop research institute and public service projects.',
            'Developed the ASD Screening AI Integrated Platform System – New service development.',
            'Enhanced functionalities of the ETRI School website – Unified student and faculty data and developed the back office.',
            'Developed the Drone Mission Data Management System – Built a scheduler for drone data storage.',
            'Enhanced functionalities of the National Supercomputing Center (KSC) website – Maintenance and additional development of the KSC website.',
          ],
          skillKeywords: [
            'Java',
            'Spring',
            'Spring Boot',
            'Spring Security',
            'JPA',
            'Spring Data JPA',
            'jQuery',
            'JavaScript',
            'ApexChart',
            'd3.js',
            'Vue',
            'Quasar',
            'React',
            'MUI',
            'Docker',
            'Docker Compose',
            'FastAPI',
            'MySQL',
            'MariaDB',
          ],
        },
      ],
    },
  ],
};

export default experience;
