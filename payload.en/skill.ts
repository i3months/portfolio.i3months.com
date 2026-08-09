import { ISkill } from '../component/skill/ISkill';

const languages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'JavaScript',
    },
    {
      title: 'Python',
    },
    {
      title: 'C++',
    },
  ],
};

const frameworkLibrary: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    {
      title: 'Spring Boot',
    },
    {
      title: 'React.js',
    },
    {
      title: 'FastAPI',
    },
  ],
};

const infrastructure: ISkill.Skill = {
  category: 'Infrastructure',
  items: [
    {
      title: 'AWS',
    },
    {
      title: 'GCP',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Kubernetes',
    },
    {
      title: 'NGINX',
    },
    {
      title: 'Linux',
    },
    {
      title: 'Tomcat',
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Databases',
  items: [
    {
      title: 'MySQL',
    },
    {
      title: 'SQL Server',
    },
    {
      title: 'Redis',
    },
    {
      title: 'Elasticsearch',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [languages, frameworkLibrary, infrastructure, database],
};

export default skill;
