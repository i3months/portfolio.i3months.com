import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'IWAZ (South Korea)',
      positions: [
        {
          title: 'Intelligent Technology Department Staff - Web Developer',
          startedAt: '2024-02',
          endedAt: '2025-03',
          descriptions: [
            'Developed features for the Chemical Information Platform Service at the Korea Research Institute of Chemical Technology (KRICT) – Query tuning, data migration, and visualization.',
            'Enhanced functionalities of the DBpia service – Maintenance, back-office management.',
            'Developed and maintained DBpia Content Maker (DCM), a research paper metadata creation platform.',
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
            'Tomcat',
          ],
        },
      ],
    },
    {
      title: 'CHIRON SOFT (South Korea)',
      positions: [
        {
          title: 'Research & Development Department Researcher - Web Developer',
          startedAt: '2023-03',
          endedAt: '2024-02',
          descriptions: [
            'Developed the ASD Screening AI Integrated Platform System',
            'Enhanced functionalities of the ETRI School website – Maintenance, back-office management.',
            'Developed the Drone Mission Data Management System – Built a scheduler for drone data storage.',
            'Enhanced functionalities of the National Supercomputing Center (KSC) website – Maintenance, back-office management.',
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
