import Link from 'next/link';

/**
 * ### 국문/영문 이력서 전환 토글
 *
 * @description 우측 하단에 고정되는 세그먼트 토글. 현재 언어를 강조하고, 인쇄 시에는 표시하지 않는다.
 */
export function LocaleToggle({ locale }: { locale: 'ko' | 'en' }) {
  const isKo = locale === 'ko';

  return (
    <nav className="locale-toggle resume-screen-only" aria-label={isKo ? '언어 선택' : 'Language'}>
      {isKo ? (
        <span className="segment segment-active" aria-current="page">
          KO
        </span>
      ) : (
        <Link href="/">
          <a href="/" className="segment">
            KO
          </a>
        </Link>
      )}

      {isKo ? (
        <Link href="/en">
          <a href="/en" className="segment">
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
          padding: 4px;
          border-radius: 999px;
          background-color: rgba(255, 255, 255, 0.82);
          -webkit-backdrop-filter: saturate(180%) blur(12px);
          backdrop-filter: saturate(180%) blur(12px);
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.1);
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
          color: #8a8f98;
          text-decoration: none;
          user-select: none;
          transition: all 0.18s ease-in-out;
        }

        a.segment:hover,
        a.segment:focus {
          color: var(--resume-accent, #1f7fe0);
          background-color: rgba(31, 127, 224, 0.09);
          text-decoration: none;
        }

        .segment-active {
          color: #fff;
          background-color: var(--resume-accent, #1f7fe0);
          box-shadow: 0 2px 6px rgba(31, 127, 224, 0.35);
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
