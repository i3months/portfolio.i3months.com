import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'I enjoy defining problems myself and solving them. I have owned services end to end, from planning through development and operation. When a problem would not yield, I looked one layer down — and the answer was always in the underlying principles. That is why, as much as I work with new technologies, I invest time in solidifying the ground beneath them.',
    'I believe the output of Agentic AI is shaped less by the model itself than by the harness built around it — and that the harness has to be built for the project at hand. I organize the documents and rules that project needs, turn the mistakes I repeatedly miss into Skills and Hooks so they are caught at the moment a tool runs, and run Claude Code in a multi-agent structure that separates the authority to plan, implement, and verify. I may delegate the implementation, but deciding what to build and why, and judging whether the result is right, stay with me. My goal is to keep that standard of judgment and to be an engineer who can speak about the software he builds with conviction of his own.',
    'I believe technology creates its greatest value when it connects with other domains, and that this connection begins with close communication between engineering and business. And so, for collaboration to succeed, I work to understand precisely what problem we are solving. Sharing that understanding with my team, I want to become a developer who solves ever larger problems together with them.',
  ],
  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
