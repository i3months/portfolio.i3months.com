export declare namespace IRow {
  export interface Payload {
    left: Left;
    right: Right;
  }

  export interface Left {
    title: string;
    subTitle?: JSX.Element;
  }

  export interface Right {
    title?: string;
    subTitle?: string;
    descriptions?: Description[];
    skillKeywords?: string[];
  }

  /**
   * ### Sample 1
   *
   * ![image](https://user-images.githubusercontent.com/8033320/78037377-6d13c900-73a6-11ea-97d1-549755b7d394.png)
   *
   * ### Sample 2
   *
   * ![image](https://user-images.githubusercontent.com/8033320/78037317-55d4db80-73a6-11ea-833b-b8577d20cdcc.png)
   */
  export interface Description {
    /** ### 설명 본문 */
    content: string;

    /**
     * ### 폰트 두께 설정이 필요할 경우
     *
     * @default 'DEFAULT'
     * @description Pretendard 에서 font-weight 300 을 DEFAULT 로 사용하고 있다.
     * @see https://github.com/uyu423/resume-nextjs/blob/master/component/common/CommonRow.tsx
     */
    weight?: FontWeightType;

    /**
     * ### content 앞에 붙일 FontAwesome 아이콘
     *
     * @description FontAwesome 아이콘 이름 (예: 'github', 'link', 'star')
     * @example preIcon: 'github'
     */
    preIcon?: string;

    /**
     * ### 하이퍼링크 (overload)
     *
     * @description `undefiend` 가 아닐 경우 `content` 필드는 `<a href>` 가 된다.
     */
    href?: string;

    /**
     * ### content 끝에 붙일 이미지
     *
     * @description `undefined` 가 아닐 경우 `content` 뒤에 이미지를 붙인다.
     */
    postImage?: string;

    /**
     * ### content 끝에 붙일 하이퍼링크
     *
     * @description `undefined` 가 아닐 경우 `content` 뒤에 하이퍼링크를 붙인다.
     */
    postHref?: string;

    /**
     * ### content 내 일부 텍스트에만 링크를 걸고 싶을 때
     *
     * @description content를 여러 부분으로 나누어 일부만 링크 처리
     */
    contentLinks?: ContentLink[];

    /**
     * ### Depth 가 하나 더 들어가는 Description
     *
     * @description 여러 계층을 가지는 `<ul>` 태그 구현을 위해 Recursion 형태로 구현됨
     */
    descriptions?: Description[];
  }

  export interface ContentLink {
    /** ### 링크 텍스트 */
    text: string;

    /** ### 링크 URL (선택사항) */
    href?: string;
  }

  export type FontWeightType =
    | 'DEFAULT'
    | 'THIN'
    | 'EXTRA_LIGHT'
    | 'LIGHT'
    | 'REGULAR'
    | 'MEDIUM'
    | 'SEMI_BOLD'
    | 'BOLD'
    | 'EXTRA_BOLD'
    | 'BLACK';
}
