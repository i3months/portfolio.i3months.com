/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import { Experience } from '../../component/experience';
import { Introduce } from '../../component/introduce';
import { Profile } from '../../component/profile';
import { Project } from '../../component/project';
import { Skill } from '../../component/skill';
import { Activities, AwardList } from '../../component/activities';
import { Presentation } from '../../component/presentation';
import { OpenSource } from '../../component/openSource';
import { Style } from '../../component/common/Style';
import Payload from '../../payload.en';
import { LocaleToggle } from '../../component/common/LocaleToggle';
import { SectionNav } from '../../component/common/SectionNav';
import { ViewControls } from '../../component/common/ViewControls';

function ResumeEN() {
  return (
    <>
      {/* 미리보기 빌드(/new)는 같은 내용의 복사본이라 색인에서 뺀다. canonical 은 본 배포를 가리킨다. */}
      <NextSeo
        {...Payload._global.seo}
        noindex={!!process.env.NEXT_PUBLIC_RESUME_PREVIEW}
        nofollow={!!process.env.NEXT_PUBLIC_RESUME_PREVIEW}
      />
      {/* 검색엔진이 사람(Person)으로 인식하도록 구조화 데이터를 제공한다 */}
      <SocialProfileJsonLd
        type="Person"
        name={Payload.profile.name.title}
        url="https://portfolio.i3months.com/en"
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
        <Project.Component payload={Payload.project} locale="en" />
        <OpenSource.Component payload={Payload.openSource} />
        <Skill.Component payload={Payload.skill} />
        <Presentation.Component payload={Payload.presentation} />
        <AwardList payload={Payload.award} />
        <Activities
          locale="en"
          license={Payload.license}
          education={Payload.education}
          etc={Payload.etc}
          article={Payload.article}
        />

        {/* <Footer.Component payload={Payload.footer} /> */}
      </Container>
      <SectionNav locale="en" />
      <ViewControls locale="en" />
      <LocaleToggle locale="en" />
    </>
  );
}

export default ResumeEN;
