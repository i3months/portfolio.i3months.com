import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'I enjoy defining problems myself and solving them. I have turned inconveniences from my own daily life into services and carried them from planning through development and operation, and once I take on a problem, I dig all the way down. Like the time I traced a failure that only appeared in production down to the infrastructure layer, problems followed deep enough always came down to fundamentals like networks, databases, and operating systems. That is why I invest in fundamentals as much as in new tools.',
    "I believe a developer's value lies not in writing code fast, but in defining what to build and why, and in verifying that what got built is right. Trust in AI output, too, comes not from the output itself but from the verification system wrapped around it. So for each project I build a Claude Code based multi-agent harness that separates the authority to plan, implement, and verify, and use it to ship real services — and the mistakes I repeatedly miss get baked into Skills and Hooks so they are removed at the source.",
    "I try to distinguish the moment that calls for the easy way from the moment that calls for the right way. Asked to add one hard-coded category value, I moved the settings into the database and built an admin screen instead, so the owner could apply changes without a deployment. Efficiency means saving my teammates' time: repetitive work goes into CI/CD, and shared components are documented in Storybook so the team never builds the same thing twice. When collaborating, I ask for the reasoning behind a requirement first, share schedules and risks early, and write down why decisions were made. What I learn goes into a tech blog I have run for five years, and into open source.",
  ],
  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
