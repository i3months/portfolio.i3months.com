import { PropsWithChildren } from 'react';

/**
 * 히어로 그리드의 `avatar` 셀에 바로 앉는다. (`.resume-hero .resume-avatar`)
 * 감싸는 요소를 두면 그리드 셀이 감싸는 요소가 되어 사진이 셀 안에서 따로 정렬되지 않는다.
 */
export default function ProfileImage({
  src,
  name,
}: PropsWithChildren<{ src: string; name?: string }>) {
  /* alt 는 '프로필' 같은 일반명사보다 사람 이름이 유용하다 */
  return <img className="resume-avatar" src={src} alt={name || 'Profile'} />;
}
