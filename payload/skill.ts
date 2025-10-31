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

const intrastructureDatabase: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'AWS',
    },
    {
      title: 'NGINX',
    },
    {
      title: 'Redis',
    },
    {
      title: 'Tomcat',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Linux',
    },
    {
      title: 'SQL Server',
    },
    {
      title: 'Elasticsearch',
    },
  ],
};
const skill: ISkill.Payload = {
  disable: false,
  title: '기술 스택.',
  skills: [languages, frameworkLibrary, intrastructureDatabase],
};

export default skill;
