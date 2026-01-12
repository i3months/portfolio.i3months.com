/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Education } from '../../component/education';
import { Etc } from '../../component/etc';
import { Experience } from '../../component/experience';
import { Introduce } from '../../component/introduce';
import { Award } from '../../component/award';
import { Profile } from '../../component/profile';
import { Project } from '../../component/project';
import { Skill } from '../../component/skill';
import { OpenSource } from '../../component/openSource';
import { Style } from '../../component/common/Style';
import Payload from '../../payload.en';
import { Article } from '../../component/article';

function ResumeEN() {
  return (
    <>
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
      </Head>
      <Container style={Style.global}>
        <Profile.Component payload={Payload.profile} />
        <Introduce.Component payload={Payload.introduce} />
        <Experience.Component payload={Payload.experience} />
        <Project.Component payload={Payload.project} />
        <OpenSource.Component payload={Payload.openSource} />
        <Skill.Component payload={Payload.skill} />
        <Award.Component payload={Payload.award} />
        <Education.Component payload={Payload.education} />
        <Etc.Component payload={Payload.etc} />
        <Article.Component payload={Payload.article} />

        {/* <Presentation.Component payload={Payload.presentation} /> */}
        {/* <Footer.Component payload={Payload.footer} /> */}
      </Container>
    </>
  );
}

export default ResumeEN;
