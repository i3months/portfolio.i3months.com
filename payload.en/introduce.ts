import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

/**
 * 영문 소개는 `payload/introduce.ts` 의 번역이다.
 * 한글이 원본이므로 한글을 고치면 이 파일도 같이 맞춘다.
 */
const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Because I enjoy defining problems myself and solving them, I have owned services end to end, from planning through development and operation. When a problem would not yield, I looked one layer down, and the answer was always in the underlying principles. That is why, as much as I work with new technologies, I invest time in solidifying the ground beneath them.',
    'I believe the output of Agentic AI is shaped less by the performance of the model than by the harness a project needs. I organize the documents and rules, and turn the mistakes I repeatedly miss into Skills and Hooks that verify the work. Even when I work with AI, I still decide what to build and why, and judge whether the result is right. My goal is to be an engineer who keeps that standard of judgment and can speak about the software I build with conviction of my own.',
    'I believe technology creates its greatest value when it connects with other domains, and that this connection begins with close communication between engineering and business. And so, in collaboration, I work to understand precisely what problem we are solving. Sharing that understanding with my team, I want to become a developer who solves ever larger problems together with them.',
  ],
  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
