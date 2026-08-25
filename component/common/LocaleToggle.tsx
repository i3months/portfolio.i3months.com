import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * ### 국문/영문 이력서 전환 토글
 *
 * @description 우측 하단에 고정되는 세그먼트 토글. 현재 언어를 강조하고, 인쇄 시에는 표시하지 않는다.
 *              색은 모두 테마 변수를 쓴다. (예전엔 흰색이 하드코딩되어 다크 모드에서 혼자 밝게 떠 있었다)
 *              활성 세그먼트는 강조색 채움 대신 옅은 회색 채움 — 페이지에서 가장 채도 높은 요소가
 *              언어 토글일 이유는 없다.
 */
export function LocaleToggle({ locale }: { locale: 'ko' | 'en' }) {
  const isKo = locale === 'ko';
  /**
   * 미리보기 빌드(`basePath: /new`)에서는 `/en` 이 `/new/en` 이어야 한다.
   * `Link` 는 자식 `<a>` 에 href 가 이미 있으면 덮어쓰지 않으므로 직접 붙인다.
   */
  const { basePath } = useRouter();

  return (
    <nav className="locale-toggle resume-screen-only" aria-label={isKo ? '언어 선택' : 'Language'}>
      {isKo ? (
        <span className="segment segment-active" aria-current="page">
          KO
        </span>
      ) : (
        <Link href="/">
          <a href={`${basePath}/`} className="segment">
            KO
          </a>
        </Link>
      )}

      {isKo ? (
        <Link href="/en">
          <a href={`${basePath}/en`} className="segment">
            EN
          </a>
        </Link>
      ) : (
        <span className="segment segment-active" aria-current="page">
          EN
        </span>
      )}

      <style jsx>{`
        .locale-toggle {
          position: fixed;
          right: 28px;
          bottom: 28px;
          z-index: 1030;
          display: flex;
          align-items: center;
          gap: 2px;
          padding: 3px;
          border-radius: 999px;
          background-color: var(--resume-bg);
          border: 1px solid var(--resume-line);
          box-shadow: var(--control-shadow);
        }

        .segment {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 46px;
          padding: 7px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          line-height: 1;
          color: var(--resume-muted);
          text-decoration: none;
          user-select: none;
          transition: color 0.15s ease, background-color 0.15s ease;
        }

        a.segment:hover,
        a.segment:focus-visible {
          color: var(--resume-accent-strong);
          background-color: var(--badge-bg);
          text-decoration: none;
          outline: none;
        }

        .segment-active {
          color: var(--resume-text);
          background-color: var(--badge-bg);
        }

        @media (max-width: 576px) {
          .locale-toggle {
            right: 16px;
            bottom: 16px;
          }

          .segment {
            min-width: 42px;
            padding: 6px 12px;
            font-size: 0.74rem;
          }
        }

        @media print {
          .locale-toggle {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
