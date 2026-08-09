/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import { Education } from '../component/education';
import { License } from '../component/license';
import { Etc } from '../component/etc';
import { Experience } from '../component/experience';
import { Introduce } from '../component/introduce';
import { Award } from '../component/award';
import { Profile } from '../component/profile';
import { Project } from '../component/project';
import { Skill } from '../component/skill';
import { OpenSource } from '../component/openSource';
import { Style } from '../component/common/Style';
import Payload from '../payload';
import { Article } from '../component/article';
import { Presentation } from '../component/presentation';
import { LocaleToggle } from '../component/common/LocaleToggle';
import { SectionNav } from '../component/common/SectionNav';
import { ViewControls } from '../component/common/ViewControls';

function Resume() {
  return (
    <>
      <NextSeo {...Payload._global.seo} />
      {/* 검색엔진이 사람(Person)으로 인식하도록 구조화 데이터를 제공한다 */}
      <SocialProfileJsonLd
        type="Person"
        name={Payload.profile.name.title}
        url="https://portfolio.i3months.com/"
        sameAs={Payload.profile.contact
          .map((contact) => contact.link)
          .filter((link): link is string => !!link && link.startsWith('http'))}
      />
      <Head>
        <title>{Payload._global.headTitle}</title>
        {/**
         * 파비콘은 `public/favicon.ico` 와 `_document` 의 PNG 링크로 제공한다.
         * asset 에서 import 하면 next-images 가 base64 로 인라인해 페이지마다 8KB 이상 늘어난다.
         */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Container style={Style.global}>
        <Profile.Component payload={Payload.profile} />
        <Introduce.Component payload={Payload.introduce} />
        <Experience.Component payload={Payload.experience} />
        <Project.Component payload={Payload.project} />
        <OpenSource.Component payload={Payload.openSource} />
        <Skill.Component payload={Payload.skill} />
        <Award.Component payload={Payload.award} />
        <Presentation.Component payload={Payload.presentation} />
        <Education.Component payload={Payload.education} />
        <Etc.Component payload={Payload.etc} />
        <License.Component payload={Payload.license} />
        <Article.Component payload={Payload.article} />

        {/* <Footer.Component payload={Payload.footer} /> */}
      </Container>
      <SectionNav locale="ko" />
      <ViewControls locale="ko" />
      <LocaleToggle locale="ko" />
    </>
  );
}

export default Resume;
