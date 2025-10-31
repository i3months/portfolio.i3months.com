import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'I primarily work with Java and Spring Boot. I have experience developing and operating production services in cloud environments using technologies such as Redis, Elasticsearch, and Spring Batch. Through these experiences, I have strengthened my skills in performance optimization and incident response. Recently, I have also been studying React and AI technologies with great interest.',
    'I genuinely believe that programming is my true calling—a tool to solve diverse problems. I find immense satisfaction in helping others and delivering value through technology.',
    'I believe that clear documentation is the foundation of successful collaboration. I record meeting notes, project specifications, schedules, and the rationale behind technical decisions in detail to minimize misunderstandings and communication overhead during the development process.',
  ],
  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
