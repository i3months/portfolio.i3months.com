import { PropsWithChildren } from 'react';

/**
 * 프로필 사진
 *
 * @description 크기와 원형 크롭은 `styles/global.css` 의 `.resume-avatar` 에서 관리한다.
 *              `object-fit: cover` 로 잘라내므로 세로·가로·정사각 어떤 사진을 넣어도 같은 원형으로 보인다.
 *              (정사각형에 가까운 사진일수록 얼굴이 중앙에 온다)
 */
export default function ProfileImage({
  src,
  name,
}: PropsWithChildren<{ src: string; name?: string }>) {
  return (
    <div className="pb-3 text-md-right text-center">
      {/* alt 는 '프로필' 같은 일반명사보다 사람 이름이 유용하다 */}
      <img className="resume-avatar" src={src} alt={name || 'Profile'} />
    </div>
  );
}
