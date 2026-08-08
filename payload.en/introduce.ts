import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'I enjoy defining problems myself and solving them. I have owned services end to end, from planning through development and operation. When a problem would not yield, I looked one layer down — and the root answer could always be found in the fundamentals: networks, databases, operating systems. That is why, as much as I work with new technologies, I invest time in solidifying the fundamentals beneath them.',
    "I develop alongside Agentic AI. I believe an agent's output is shaped less by the model itself than by the harness built around it. So for every project I organize context documents and rules, and build a Claude Code based multi-agent harness that separates the authority to plan, implement, and verify — and use it to ship real services. When designing architecture, I think beyond what is maintainable for humans toward structures an AI can grasp in one pass, and the mistakes I repeatedly miss are baked into Skills and Hooks so they are removed at the source.",
    'I believe technology creates its greatest value when it connects with other domains, and that this connection begins with close communication between engineering and business. For collaboration to succeed, I work to understand precisely what problem we are solving. Sharing that understanding with my team, I want to become a developer who solves ever larger problems together with them.',
  ],
  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
