import { NextSeoProps } from 'next-seo';

export declare namespace IGlobal {
  export interface Payload {
    /**
     * ### Resume 제목
     *
     * @description `<head>` 태그 내 `<title>` 을 정의한다.
     */
    headTitle: string;

    /**
     * ### favicon 이미지
     *
     * @deprecated 파비콘은 `public/favicon.ico` 와 `pages/_document.tsx` 의 링크로 제공한다.
     *             여기서 asset 을 import 하면 next-images 가 base64 로 인라인해 페이지 HTML 이 커진다.
     */
    favicon?: string;

    /**
     * ### SEO Properties
     *
     * @description OpenGraph 메타 태그를 포함한 SEO 를 위한 요소를 정의한다. `next-seo` 를 사용했으므로 해당 패키지를 참고한다.
     * @see https://github.com/garmeeh/next-seo
     */
    seo: NextSeoProps;
  }
}
