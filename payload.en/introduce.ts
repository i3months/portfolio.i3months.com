import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'I primarily work with Java and Spring Boot. I have experience developing and operating production services in cloud environments using Redis, Elasticsearch, and Spring Batch. Through these experiences, I have strengthened my skills in performance optimization and incident response. Recently, I have been expanding my interests into Cloud Native technologies and Agentic AI.',
    'I believe that clear documentation determines the quality of collaboration. I have been maintaining a technical blog for 5 years, documenting my learning and problem-solving experiences. I meticulously record meeting notes, project specifications, and the rationale behind technical decisions to minimize unnecessary misunderstandings and communication costs in the development process.',
  ],
  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
