import Document, { Head, Html, Main, NextScript, DocumentContext } from 'next/document';

/**
 * 첫 페인트 전에 테마를 확정하는 스크립트.
 *
 * @description 테마를 React 이펙트에서만 적용하면 다크 모드 사용자에게 흰 화면이 한 번 번쩍인다(FOUC).
 *              이 스크립트를 <head> 에서 동기 실행해 `html[data-theme]` 를 미리 심는다.
 *              localStorage 접근은 시크릿 모드에서 예외를 던질 수 있어 감싸둔다.
 */
const THEME_BOOTSTRAP_SCRIPT = `
(function () {
  try {
    var stored = window.localStorage.getItem('resume-theme');
    var theme = stored === 'dark' || stored === 'light'
      ? stored
      : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (error) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

interface DocumentProps {
  lang: string;
}

export default class ResumeDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    // 영문 이력서(/en)는 lang 을 en 으로 내려야 스크린리더와 검색엔진이 올바르게 처리한다.
    const lang = ctx.pathname && ctx.pathname.startsWith('/en') ? 'en' : 'ko-KR';

    return { ...initialProps, lang };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <meta charSet="utf-8" />
          {/* iOS 가 본문 숫자를 전화번호 링크로 바꾸는 것을 막는다 (본문 안에 두면 HTML 유효성 위반) */}
          <meta name="format-detection" content="telephone=no" />
          {/* 파비콘: 브라우저 탭용 32x32 PNG, iOS 홈 화면용 180x180 */}
          {/* public/ 에서 정적 파일로 제공한다. asset import 는 base64 인라인되어 HTML 을 키운다 */}
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          {/* 웹폰트 CDN 연결을 미리 열어 첫 렌더의 폰트 대기 시간을 줄인다 */}
          <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
          <link
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
            rel="stylesheet"
          />
          {/**
           * Noto Sans KR / Parisienne 는 제거했다.
           * 본문은 Pretendard 로 통일했고, Parisienne 를 쓰는 서명(`Style.sign`)은
           * payload 의 `sign` 이 비어 있어 렌더되지 않는다.
           * 쓰지 않는 웹폰트 CSS 는 렌더를 막는 요청만 늘린다.
           * 서명을 다시 쓸 경우 이 자리에 Parisienne 링크를 되살리면 된다.
           */}
          {/* eslint-disable-next-line react/no-danger */}
          <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
