import { CSSProperties } from 'react';

/** Style 추론을 위하여.. */
type TStyleKey = 'blue' | 'gray' | 'global' | 'sign' | 'footerCover' | 'footer';

export const Style: Record<TStyleKey, CSSProperties> = {
  /**
   * 섹션 제목 / 이름에 쓰는 강조색.
   *
   * @description 실제 값은 `styles/global.css` 의 `--resume-accent` 가 갖는다. (다크 테마에서 함께 바뀐다)
   *              라이트 기준값 #1f7fe0 은 흰 배경에서 4.4:1 로 WCAG AA 를 만족한다.
   */
  blue: {
    color: 'var(--resume-accent, #1f7fe0)',
  },

  /**
   * 기간·보조 설명용 회색.
   *
   * @description 'gray'(#808080) 는 본문 크기에서 대비가 부족해 한 단계 어둡게 잡았다.
   */
  gray: {
    color: 'var(--resume-muted, #656d76)',
  },

  global: {
    // font-family / line-height 는 화면 폭에 따라 달라지므로 styles/global.css 에서 관리한다.
    wordWrap: 'break-word',
    wordBreak: 'keep-all',
    paddingBottom: '100px',
  },

  sign: {
    fontFamily: "'Parisienne', cursive",
    fontSize: '1.5em',
  },

  footerCover: {
    backgroundColor: '#f5f5f5',
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: '50px',
    height: '80px',
  },

  footer: {
    // paddingTop: '10px',
  },
};
