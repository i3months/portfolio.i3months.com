import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Developed UniScope - A Platform for Nationwide University Information',
      startedAt: '2025-08',
      endedAt: '2025-11',
      where: 'KakaoTechCampus (South Korea)',
      descriptions: [
        {
          content: 'GitHub Repository',
          href: 'https://github.com/kakao-tech-campus-3rd-step3/Team21_FE',
          weight: 'SEMI_BOLD',
        },
        {
          content:
            'Documented UI components across the project using Storybook to enhance reusability and improve development speed and design consistency.',
        },
        {
          content:
            'Built an E2E testing environment using Playwright and automated actual browser-based UI flows and key business logic.',
        },
        {
          content:
            'Improved page structure and performance to achieve high scores across 4 Lighthouse metrics, and enhanced initial accessibility through meta tag-based SEO optimization.',
        },
        {
          content:
            'Applied Husky at the pre-commit stage to enforce linting rules and built a CI/CD pipeline based on GitHub Actions.',
        },
        {
          content:
            'Introduced Feature Sliced Design (FSD) architecture and established related team guidelines to ensure maintainability and scalability.',
        },
        {
          content:
            'Designed a deployment architecture integrating AWS and Vercel, and built a Blue/Green zero-downtime deployment environment using Nginx reverse proxy.',
        },
      ],
      skillKeywords: ['TypeScript', 'React', 'Playwright', 'FSD', 'Storybook'],
    },
    {
      title: 'Developed features for the Chemical Information Platform Service',
      startedAt: '2025-01',
      endedAt: '2025-03',
      where: 'IWAZ (South Korea)',
      descriptions: [
        {
          content: 'Migrated data from TIBERO to MariaDB.',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Indexing migrated data and implemented partitioning for statistical data.',
            },
          ],
        },
        {
          content: 'Optimized queries from TIBERO to MariaDB.',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Implemented hierarchical queries and sorting using WITH RECURSIVE and SORT_PATH.',
              href: 'https://13months.tistory.com/688',
            },
            {
              content:
                'Refactored high-cost statistical queries, improving performance (873.231ms → 214.245ms).',
            },
          ],
        },
        {
          content:
            'Visualized statistical data using ApexChart and implemented favorites and table search features.',
        },
      ],
      skillKeywords: ['Java', 'Spring Boot', 'MariaDB', 'Tibero', 'jQuery', 'ApexChart'],
    },
    {
      title: 'Enhanced functionalities of the DBpia service',
      startedAt: '2024-04',
      endedAt: '2024-12',
      where: 'IWAZ (South Korea)',
      descriptions: [
        {
          content:
            'Integrated Redis for floating banners and developed APIs to connect the back office with the DBpia service.',
        },
        {
          content:
            'Modified Elasticsearch queries and existing mappings for the unified search feature, restructured the research paper index.',
          href: 'https://13months.tistory.com/769',
        },
        {
          content:
            'Analyzed execution plans, reindexed data, and optimized high-cost queries (4481.926ms → 1111.281ms).',
          href: 'https://13months.tistory.com/779',
        },
        {
          content:
            'Managed encrypted view schemas and handled encryption/decryption of sensitive information.',
          href: 'https://13months.tistory.com/780',
        },
        {
          content:
            'Maintained DBpia service operations – Fixed Excel download bugs, managed the PDF download server, and handled long-term inactive users.',
        },
      ],
      skillKeywords: [
        'Java',
        'Spring Boot',
        'Redis',
        'Elasticsearch',
        'SQL Server',
        'JavaScript',
        'AWS',
      ],
    },
    {
      title: 'Developed DBpia Content Maker (DCM)',
      startedAt: '2024-02',
      endedAt: '2024-12',
      where: 'IWAZ (South Korea)',
      skillKeywords: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'Spring Batch',
        'SQL Server',
        'NGINX',
        'Elasticsearch',
        'jQuery',
        'Tomcat',
      ],
      descriptions: [
        {
          content:
            'Analyzed legacy source code written in C# and C++ and designed a new web-based system.',
        },
        {
          content:
            'Utilized Git Flow strategy for seamless collaboration, analyzed user requirements and system processes.',
        },
        {
          content: 'Set up and managed project configurations and operations.',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Configured Spring Security with custom filters and authenticators, implemented LDAP-based login.',
            },
            {
              content:
                'Customized Spring Security authentication exception handling - Implemented account lockout policy.',
              href: 'https://13months.tistory.com/671',
            },
            {
              content: 'Resolved DataSource TLS compatibility issue with SQL Server 2005.',
              href: 'https://13months.tistory.com/667',
            },
            {
              content:
                'Fixed incompatibility between the latest Spring Batch version and SQL Server 2005 sequences.',
              href: 'https://13months.tistory.com/679',
            },
            {
              content: 'Established certificates and domains, ',
              contentLinks: [
                {
                  text: 'NGINX-based reverse proxy routing for development and production servers',
                  href: 'https://13months.tistory.com/681',
                },
              ],
            },
            {
              content: 'Deployed and managed Tomcat on Windows Server, ',
              contentLinks: [
                {
                  text: 'resolved symbolic link-related network drive permission issues',
                  href: 'https://13months.tistory.com/682',
                },
              ],
            },
            {
              content:
                'Configured Tomcat JVM memory pool and implemented redundancy for production and development servers.',
            },
            {
              content:
                'Handled penetration testing issues, including XSS, CSRF, and sensitive data masking.',
            },
            {
              content:
                'Analyzed and optimized SQL Server Linked Server RPC overhead using OPENQUERY.',
              href: 'https://13months.tistory.com/779',
            },
          ],
        },
        {
          content: 'Research Paper Metadata Production System Development',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Developed PDF splitting system (PDFBox, PDF.js) - Handled logical/physical page differentiation',
              href: 'https://13months.tistory.com/680',
            },
            {
              content:
                'Refactored a legacy C++ batch system into Spring Batch, integrating ERP and DCM services to enhance stability and processing speed.',
            },
            {
              content:
                'Developed a temporary storage system for research papers to periodically save input data.',
            },
            {
              content:
                'Implemented an email-based research paper author search feature using Elasticsearch.',
            },
          ],
        },
        {
          content: 'Efficiency Improvements & Service Optimization',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Revamped the research paper production system, reducing metadata processing time (30 min → 15 min for 50 papers).',
            },
            { content: 'Optimized batch processing, cutting publication time (3 days → 1 day).' },
          ],
        },
      ],
    },
    {
      title: 'Developed the ASD Screening AI Integrated Platform System',
      startedAt: '2023-10',
      endedAt: '2024-02',
      where: 'CHIRON SOFT (South Korea)',
      descriptions: [
        {
          content: 'Implemented conditional branching surveys using SurveyJS.',
        },
        {
          content:
            'Transmitted video and audio data via WebSocket for real-time communication with the AI inference server.',
        },
        {
          content: 'Visualized inference results in real-time using ApexCharts and D3.js.',
        },
        {
          content: 'Set up system execution environment and deployed images using Docker.',
        },
        {
          content:
            'Developed JWT authentication and CRUD functionality for participants and test results using FastAPI.',
        },
        {
          content: 'Built and developed the frontend using Vue.',
        },
      ],
      skillKeywords: ['Vue', 'FastAPI', 'Docker', 'JavaScript', 'ApexChart', 'd3.js'],
    },
    {
      title: 'Enhanced functionalities of the ETRI School website',
      startedAt: '2023-08',
      endedAt: '2023-10',
      where: 'CHIRON SOFT (South Korea)',
      descriptions: [
        {
          content: 'Unified non-registered student and faculty data into a single table.',
        },
        {
          content:
            'Implemented bulletin board pagination and step-by-step registration using Vue Quasar.',
        },
        {
          content:
            'Developed a Spring Boot and JPA-based back-office system and integrated with the ETRI School service.',
        },
        {
          content: "Deployed and managed the system on ETRI's internal servers using Docker.",
        },
      ],
      skillKeywords: ['Vue', 'Quasar', 'Spring Boot', 'JPA', 'Docker', 'MariaDB'],
    },
    {
      title: 'Developed the Drone Mission Data Management System',
      startedAt: '2023-05',
      endedAt: '2023-10',
      where: 'CHIRON SOFT (South Korea)',
      descriptions: [
        {
          content: 'Developed batch business logic for drone data storage.',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Traversed directories using DFS and stored image metadata.',
              href: 'https://13months.tistory.com/639',
            },
            { content: 'Detected changes at the project level and updated only modified data.' },
            { content: 'Used AtomicBoolean api to ensure only one scheduler runs at a time.' },
            { content: 'Handled scheduler tasks asynchronously with CompletableFuture api.' },
            { content: 'Conducted performance benchmarking tests considering JVM warm-up.' },
          ],
        },
        {
          content: 'Visualized image data on a map using React.',
        },
        {
          content:
            'Deployed Frontend, Backend, and Database as a unified system using docker-compose.',
        },
      ],
      skillKeywords: ['React', 'MUI', 'Spring Boot', 'Docker', 'Docker Compose', 'MySQL'],
    },
    {
      title: 'Enhanced functionalities of the National Supercomputing Center website',
      startedAt: '2023-03',
      endedAt: '2023-05',
      where: 'CHIRON SOFT (South Korea)',
      descriptions: [
        {
          content: 'Redesigned the main page and developed the back-office system.',
        },
        {
          content:
            'Added an email verification step for user registration, including security measures and expiration settings for verification codes.',
        },
        {
          content:
            'Visualized supercomputer usage statistics using D3.js and optimized queries (6376.21ms → 430.71ms).',
        },
        {
          content: 'Implemented a WebSocket-based broadcast feature for connected users.',
        },
      ],
      skillKeywords: ['Spring Boot', 'd3.js', 'WebSocket', 'jQuery', 'MySQL'],
    },
  ],
};

export default project;
