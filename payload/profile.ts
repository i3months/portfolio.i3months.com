// 전화번호를 다시 넣을 때 faPhone 도 같이 되살린다.
import { faEnvelope /* , faPhone */ } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faBloggerB, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
// 원형 아바타이므로 얼굴이 크게 잡힌 크롭을 쓴다.
import profileImage from '../asset/profile@2x.jpg';

const profile: IProfile.Payload = {
  image: profileImage,
  name: {
    title: '정준모',
    small: '(i3months)',
  },
  tagline: 'Software Engineer',
  contact: [
    {
      title: 'j3ong.joonmo@gmail.com',
      link: 'mailto:j3ong.joonmo@gmail.com',
      icon: faEnvelope,
    },
    // 번호를 공개하지 않는 동안은 빈 행이 미완성처럼 보여 감춰둔다.
    // {
    //   title: '-',
    //   icon: faPhone,
    // },
    {
      link: 'https://github.com/i3months',
      icon: faGithub,
    },
    {
      link: 'https://blog.i3months.com',
      icon: faBloggerB,
    },
    {
      title: 'https://www.linkedin.com/in/joonmo-jeong/',
      link: 'https://www.linkedin.com/in/joonmo-jeong/',
      icon: faLinkedin,
    },
  ],
  // notice: {
  //   title:
  //     "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
  //   icon: faBell,
  // },
};

export default profile;
