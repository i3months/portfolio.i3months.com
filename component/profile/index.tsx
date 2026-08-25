import { PropsWithChildren } from 'react';
import ProfileContact from './contact';
import ProfileImage from './image';
import { IProfile } from './IProfile';
import { Style } from '../common/Style';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IProfile.Payload;

export const Profile = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

/**
 * ### 프로필(히어로)
 *
 * 사진 | 이름 · 한 줄 소개
 * 사진 | 연락처 알약
 *
 * @description 배치는 `styles/global.css` 의 `.resume-hero` 그리드가 맡는다.
 */
function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const { image, contact, name, tagline } = payload;

  /**
   * payload 의 `small` 은 템플릿 관례대로 괄호가 붙어 있다. ("(i3months)")
   * 이름 옆에 작게 앉히면 괄호가 군더더기라 렌더 단계에서만 뗀다.
   */
  const handle = name.small ? name.small.trim().replace(/^\((.*)\)$/, '$1') : '';

  return (
    <header className="mt-5 resume-hero">
      <ProfileImage src={image} name={name.title} />
      <div className="resume-hero-name">
        <h1 style={Style.heading}>
          {name.title}
          {handle ? (
            <>
              {' '}
              <span className="resume-handle">{handle}</span>
            </>
          ) : (
            ''
          )}
        </h1>
        {tagline ? <p className="resume-tagline">{tagline}</p> : ''}
      </div>
      <ul className="resume-contacts">
        {contact.map((item, index) => (
          <ProfileContact key={index.toString()} payload={item} />
        ))}
      </ul>
    </header>
  );
}
