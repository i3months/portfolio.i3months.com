import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import { IProfile } from './IProfile';

/**
 * ### 아이콘 -> 라벨
 *
 * @description payload 에 `title` 이 없는 링크(GitHub, 블로그 …)는 예전엔 URL 원문이 그대로 찍혔다.
 *              URL 은 첫 화면에서 가장 긴 텍스트가 되므로 아이콘 종류로 라벨을 정한다.
 *              키는 FontAwesome 의 `iconName` 이다.
 */
const LabelByIcon: Record<string, string> = {
  github: 'GitHub',
  'blogger-b': 'Blog',
  blogger: 'Blog',
  linkedin: 'LinkedIn',
  'linkedin-in': 'LinkedIn',
  twitter: 'Twitter',
  youtube: 'YouTube',
  instagram: 'Instagram',
  facebook: 'Facebook',
  'facebook-f': 'Facebook',
  medium: 'Medium',
  'stack-overflow': 'Stack Overflow',
  globe: 'Website',
};

function hostnameOf(link: string) {
  try {
    return new URL(link).hostname.replace(/^www\./, '');
  } catch (error) {
    return link;
  }
}

function labelOf(payload: IProfile.Contact) {
  /**
   * payload 의 title 에 URL 이 들어 있으면("https://…", "(Korean Blog) https://…") 라벨로 쓰지 않는다.
   * URL 을 걷어낸 나머지("Korean Blog")가 있으면 그것을, 없으면 아이콘 종류로 정한 라벨을 쓴다.
   * 이메일·전화번호 같은 값은 그대로 쓴다.
   */
  const withoutUrl = (payload.title || '')
    .replace(/https?:\/\/\S+/gi, '')
    .trim()
    .replace(/^\((.*)\)$/, '$1');
  if (withoutUrl) {
    return withoutUrl;
  }
  const byIcon = LabelByIcon[payload.icon.iconName];
  if (byIcon) {
    return byIcon;
  }
  return payload.link ? hostnameOf(payload.link) : '';
}

/**
 * ### 연락처 알약 하나
 *
 * @description 링크가 있으면 `<a>`, 없으면(전화번호처럼) 같은 모양의 `<span>`.
 *              `mailto:` 는 새 탭으로 열 이유가 없으므로 http(s) 링크만 새 탭이다.
 *              라벨은 링크인 경우 실제 URL 이 아니라 서비스 이름이므로 `title` 로 원문 URL 을 남긴다.
 */
export default function ProfileContact({
  payload,
}: PropsWithChildren<{ payload: IProfile.Contact }>) {
  const label = labelOf(payload);
  const icon = <FontAwesomeIcon icon={payload.icon} aria-hidden="true" />;

  if (payload.link) {
    // `mailto:` 는 새 탭으로 열 이유가 없으므로 http(s) 링크만 새 탭이다.
    if (payload.link.startsWith('http')) {
      return (
        <li>
          <a
            className="resume-contact"
            href={payload.link}
            title={payload.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            {icon}
            {label}
          </a>
        </li>
      );
    }
    return (
      <li>
        <a className="resume-contact" href={payload.link}>
          {icon}
          {label}
        </a>
      </li>
    );
  }

  return (
    <li>
      <span className="resume-contact">
        {icon}
        {label}
      </span>
    </li>
  );
}
