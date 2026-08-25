import { PropsWithChildren, ReactNode } from 'react';

/**
 * 섹션 제목 끝의 마침표를 뗀다. ("경력 사항." -> "경력 사항")
 *
 * @description payload 의 제목은 템플릿 관례대로 마침표가 붙어 있다.
 *              화면에서는 군더더기라 렌더 단계에서만 떼고 payload 는 손대지 않는다.
 */
export function stripTrailingPeriod(title: string) {
  return title.trim().replace(/\.$/, '');
}

/**
 * ### 섹션 공통 틀
 *
 * @param aside 제목 오른쪽 같은 줄에 앉는 짧은 보조 정보 (총 경력 배지, 갱신일 …)
 *              `h2` 바깥에 두므로 `SectionNav` 가 만드는 목차 라벨에 섞이지 않는다.
 */
export function CommonSection({
  title,
  aside,
  children,
}: PropsWithChildren<{ title: string; aside?: ReactNode }>) {
  return (
    <section className="mt-5">
      <div className="resume-section-head">
        <h2>{stripTrailingPeriod(title)}</h2>
        {aside ? <div className="resume-section-aside">{aside}</div> : ''}
      </div>
      {children}
    </section>
  );
}
